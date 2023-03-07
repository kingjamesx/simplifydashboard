import Dashboard from './public/icons/dashboard.png'
import Bank from './public/icons/bank-statement.png'
import Dispute from './public/icons/dispute.png'
import Health from './public/icons/health.png'
import Message from './public/icons/message.png'
import Performance from './public/icons/performance.png'
import Reconciliation from './public/icons/reconciliation.png'
import Settings from './public/icons/Setting.png'
import Settlement from './public/icons/settlement.png'
import Terminals from './public/icons/terminals.png'
import Transactions from './public/icons/Transactions.png'


export const data=[
    {
        id:1,
        icon:Dashboard,
        title:'Dashboard',
        link:'/',
        
    },
    {
        id:2,
        icon:Transactions,
        title:'Transaction',
        link:'/',
        subBar:[
            {
                title:'insights'
            },
            {
                title:'Terminals'
            },
            {
                title:'Branch'
            },
            {
                title:'Merchant'
            },
        ]
    },
    {
        id:3,
        icon:Health,
        title:'Terminal Health',
        link:'/',
        subBar:[
            {
                title:'insights'
            },
            {
                title:'Terminals'
            },
            {
                title:'Branch'
            },
            {
                title:'Merchant'
            },
        ]
    },
    {
        id:4,
        icon:Settlement,
        title:'Settlement',
        link:'/',
        subBar:[
            {
                title:'insights'
            },
            {
                title:'Terminals'
            },
            {
                title:'Branch'
            },
            {
                title:'Merchant'
            },
        ]
    },
    {
        id:5,
        icon:Performance,
        title:'Performance',
        link:'/',
        subBar:[
            {
                title:'insights'
            },
            {
                title:'Terminals'
            },
            {
                title:'Branch'
            },
            {
                title:'Merchant'
            },
        ]
    },
    {
        id:6,
        icon:Bank,
        title:'Bank Statement',
        link:'/',
    },
    {
        id:7,
        icon:Terminals,
        title:'My Terminals',
        link:'/',
    },
    {
        id:8,
        icon:Settings,
        title:'Settings',
        link:'/',
        subBar:[
            {
                title:'insights'
            },
            {
                title:'Terminals'
            },
            {
                title:'Branch'
            },
            {
                title:'Merchant'
            },
        ]
    },
    {
        id:9,
        icon:Message,
        title:'Message Centre',
        link:'/',
    },
    {
        id:10,
        icon:Reconciliation,
        title:'Reconciliation',
        link:'/',
    },
    {
        id:11,
        icon:Dispute,
        title:'Disput Management',
        link:'/',
    }
]