"use strict";

import {TableDefinition, TableContext} from "./types-callejero";

export function calles(_context:TableContext):TableDefinition{
    return {
        name:'calles',
        elementName:'calle',
        editable:true,
        fields:[
            {name:'codigo'           , typeName:'bigint'  },
            {name:'nomoficial'       , typeName:'text'    },
            {name:'alt_izqini'       , typeName:'bigint'  },
            {name:'alt_izqfin'       , typeName:'bigint'  },
            {name:'alt_derini'       , typeName:'bigint'  },
            {name:'alt_derfin'       , typeName:'bigint'  },
            {name:'nomanter'         , typeName:'text'    },
            {name:'nom_mapa'         , typeName:'text'    },
            {name:'tipo_c'           , typeName:'text'    },
            {name:'long'             , typeName:'decimal' },
            {name:'sentido'          , typeName:'text'    },
            {name:'observa'          , typeName:'text'    },
            {name:'red_jerarq'       , typeName:'text'    },
        ],
        primaryKey:['codigo'],
        detailTables:[
            {table:'tramos'   , fields:['codigo'], abr:'T' , label:'Tramos de calles' }
        ]
    };
}
