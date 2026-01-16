 import PersonalInfo from './Body/PersonalInfo/PersonalInfo'
import SelectPlan from './Body/SelectPlan/SelectPlan'
import PickAdd from './PickAdd'
import Finish from './Finish'

 
 export const FormTitles = [
                            'Personal Info',
                            'Select your plans',
                            'Pick add-ons,', 
                            'Finishing up'
                        ]

                
export const subFormTitles = [
                              'Please privide your name, email, and number.',
                              'You have the option of monthly or yearly billing',
                              'Add-ons helps enhance your gaming experience',
                              'Double check everything looks OK before submitting'
                                ]

export const PageDisplay = ({page, formData, setFormData}) => {
                                
                    if (page === 0){
                        return <PersonalInfo formData={formData} setFormData={setFormData} />
                    }
                
                    else if (page === 1){ 
                        return <SelectPlan/>
                    }
                
                    else if (page === 2){
                        return <PickAdd/>
                    }
                
                    else {
                    return <Finish/>
                }
                }

export const initialFormData = [
    {name: '',},
    {email: ''},
    {phonenumber: ''},
    {
     select_amount:''
    }



]

export const steps =[
    {
        number:'1',
        stepNum: 'Step 1',
        stepInfo: 'Your Info',
        index: 0

    },
     {
        number:'2',
        stepNum: 'Step 2',
        stepInfo: 'SELECT PLAN',
        index: 1

    },
     {
        number:'3',
        stepNum: 'Step 3',
        stepInfo: 'ADD ONS',
        index: 2
    },
     {
        number:'4',
        stepNum: 'Step 4',
        stepInfo: 'SUMMARY',
        index: 3

    }
]
export const selects = [
    {
        image:'/icon-arcade.svg',
        plantype:'Arcade',
        monthly_amount:'$9/mo',
        yearly_amount:'$90/yr',
        index: 0
    },

    {
        image:'/icon-advanced.svg',
        plantype:'Advanced',
        monthly_amount:'$12/mo',
        yearly_amount:'$120/yr',
        index: 1
    },

    {
        image:'/icon-pro.svg',
        plantype:'Pro',
        monthly_amount:'$15/mo',
        yearly_amount:'$150/yr',
        index: 2
    }
]

