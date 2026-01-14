 import PersonalInfo from './PersonalInfo'
import Select from './Select'
import PickAdd from './PickAdd'
import Finish from './Finish'

 
 export const FormTitles = [
                            'Personal Info',
                            'Select your plans',
                            'Pick add-ons,', 
                            'Finishing up'
                        ]

                
export const subFormTitles = [
                              'Please privide your name, email address, and phone number.',
                              'You have the option of monthly or yearly billing',
                              'Add-ons helps enhance your gaming experience',
                              'Double check everything looks OK before submitting'
                                ]

export const PageDisplay = ({page, formData, setFormData}) => {
                                
                    if (page === 0){
                        return <PersonalInfo formData={formData} setFormData={setFormData} />
                    }
                
                    else if (page === 1){ 
                        return <Select/>
                    }
                
                    else if (page === 2){
                        return <PickAdd/>
                    }
                
                    else {
                    return <Finish/>
                }
                }

export const initialFormData = {
    name: 'charles',
    email: '',
    phonenumber: ''


}

export const steps =[
    {
        number:'1',
        stepNum: 'Step 1',
        stepInfo: 'Your Info'

    },
     {
        number:'2',
        stepNum: 'Step 2',
        stepInfo: 'SELECT PLAN'

    },
     {
        number:'3',
        stepNum: 'Step 3',
        stepInfo: 'ADD ONS'

    },
     {
        number:'4',
        stepNum: 'Step 4',
        stepInfo: 'SUMMARY'

    }
]

