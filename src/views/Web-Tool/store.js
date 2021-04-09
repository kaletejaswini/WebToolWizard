/*********************************************************************************
* Agiliron Inc. (TM) - Accelerate Your Business. On Demand (SM)
* Support: support@agiliron.com, 1-855-AGIL-IRON
*
* Portions created by Agiliron are Copyright (C) 2021 Agiliron Inc. | All Rights Reserved.
*
* Unauthorized copying of this file, via any medium is strictly prohibited.
*
* Proprietary and Confidential.
********************************************************************************/

import Vue from 'vue';

export default Vue.observable({
    step: 'login',
    setStep(step){
        this.step = step;
    },
    getStep(){
        return this.step;
    },
    sessionData:{
        username: null,
        isLogin: false,
    },   
    storeData: {
        storeName: null,           
    },
});
