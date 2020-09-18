"use strict";

import {TableDefinition, TableContext} from "./types-callejero";

export function tramos(_context:TableContext):TableDefinition{
    return {
        name:'tramos',
        elementName:'tramo',
        editable:true,
        fields:[
            {name:'wkt'         ,typeName:'text'    },
            {name:'id'          ,typeName:'bigint'  },
            {name:'codigo'      ,typeName:'bigint'  },
            {name:'nomoficial'  ,typeName:'text'    },
            {name:'alt_izqini'  ,typeName:'bigint'  },
            {name:'alt_izqfin'  ,typeName:'bigint'  },
            {name:'alt_derini'  ,typeName:'bigint'  },
            {name:'alt_derfin'  ,typeName:'bigint'  },
            {name:'nomanter'    ,typeName:'text'    },
            {name:'nom_mapa'    ,typeName:'text'    },
            {name:'tipo_c'      ,typeName:'text'    },
            {name:'long'        ,typeName:'decimal' },
            {name:'sentido'     ,typeName:'text'    },
            {name:'cod_sent'    ,typeName:'bigint'  },
            {name:'observa'     ,typeName:'text'    },
            {name:'bicisenda'   ,typeName:'text'    },
            {name:'lado_ciclo'  ,typeName:'text'    },
            {name:'recorrid_x'  ,typeName:'text'    },
            {name:'ciclo_obse'  ,typeName:'text'    },
            {name:'tooltip_bi'  ,typeName:'text'    },
            {name:'red_jerarq'  ,typeName:'text'    },
            {name:'red_tp'      ,typeName:'text'    },
            {name:'ffcc'        ,typeName:'text'    },
            {name:'tipo_ffcc'   ,typeName:'text'    },
            {name:'comuna'      ,typeName:'bigint'  },
            {name:'com_par'     ,typeName:'bigint'  },
            {name:'com_impar'   ,typeName:'bigint'  },
            {name:'barrio'      ,typeName:'text'    },
            {name:'barrio_par'  ,typeName:'text'    },
            {name:'barrio_imp'  ,typeName:'text'    },
        ],
        primaryKey:['id'],
        foreignKeys:[
        ]
    };
}
