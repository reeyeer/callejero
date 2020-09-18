set search_path = callejero;

drop table calles;

create table calles as 
select 
  case when min(codigo) filter (where codigo>0)=max(codigo) then max(codigo) else null end as codigo
  , nomoficial
  , min(alt_izqini) filter (where alt_izqini>0) as alt_izqini
  , max(alt_izqfin) as alt_izqfin
  , min(alt_derini) filter (where alt_derini>0) as alt_derini
  , max(alt_derfin) as alt_derfin
  , string_agg(distinct nomanter, '; ') as nomanter
  , string_agg(distinct nom_mapa, '; ') as nom_mapa
  , string_agg(distinct tipo_c, '; ') as tipo_c
  , sum(long) as long
  , string_agg(distinct sentido, '; ') as sentido
  , string_agg(distinct observa, '; ') as observa
  , string_agg(distinct red_jerarq, '; ') as red_jerarq
from tramos
group by nomoficial;

alter table calles add primary key (nomoficial);

select 
codigo
, count(distinct nomoficial) repe
, string_agg(distinct nomoficial, '; ') nombres
  from tramos
  where nomoficial not like '% OFICIAL %'
  group by codigo
  having count(distinct nomoficial)>1
  order by 2 desc;
  
select nomoficial
, count(distinct codigo) repe
, string_agg(distinct codigo::text, '; ') nombres
  from tramos
  group by nomoficial
  having count(distinct codigo)>1
  order by 2 desc;
  
grant select, insert, update, delete on "calles" to callejero_admin;
grant all on "calles" to callejero_owner;

alter table "calles" add constraint "nomoficial<>''" check ("nomoficial"<>'');
alter table "calles" alter column "nomoficial" set not null;
alter table "calles" add constraint "nomanter<>''" check ("nomanter"<>'');
alter table "calles" add constraint "nom_mapa<>''" check ("nom_mapa"<>'');
alter table "calles" add constraint "tipo_c<>''" check ("tipo_c"<>'');
alter table "calles" add constraint "sentido<>''" check ("sentido"<>'');
alter table "calles" add constraint "observa<>''" check ("observa"<>'');
alter table "calles" add constraint "red_jerarq<>''" check ("red_jerarq"<>'');
