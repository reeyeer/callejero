"use strict";

import {TableDefinition, TableContext} from "./types-callejero";

export function comunas(_context:TableContext):TableDefinition{
    return {
        name:'comunas',
        elementName:'comuna',
        editable:true,
        fields:[
            {name:'comuna'           , typeName:'integer' , nullable:false  },
            {name:'nombre'           , typeName:'text'                      }, /* según la ley de comunas cada comuna eligirá su nombre */
        ],
        primaryKey:['comuna'],
        foreignKeys:[
        ],
        detailTables:[
            {table:'tramos'   , fields:['comuna'], abr:'T' , label:'Tramos de calles' }
        ]
    };
}
