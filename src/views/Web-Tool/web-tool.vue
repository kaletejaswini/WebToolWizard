<!--
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
-->
<template>
    <v-container fluid grid-list-xl py-0>
        <div class="app-card">
            <v-stepper v-model="currentStep">
                <v-stepper-header>
                    <h1>Shares Webtool</h1>  
                    <a v-if="store.sessionData.isLogin" @click="logout()"> Logout </a>
                </v-stepper-header>
                <v-stepper-items>  
                    <Login />
                    <WebStore />
                    <WebStoreSelected />          
                </v-stepper-items>
            </v-stepper>
        </div>
    </v-container>
</template>

<style>
    .v-stepper__header {
        padding: 24px;
    }
    .v-stepper__items {
        padding: 24px;
    }
    .app-card {
        margin-top: 4%;
    }    
</style>
<script>
    import Login from "./Login/login"; 
    import WebStore from "./WebStore/select-store"; 
    import WebStoreSelected from "./WebStore/store-selected"; 

    import "vue-form-wizard/dist/vue-form-wizard.min.css";
    import Vue from "vue";
    import $ from "jquery";
    import StoreObserver from "./store";

    export default {
        data() {
            return {
                store: StoreObserver,
            };
        },
        computed: {
            currentStep: {
                get: function(){
                    return this.store.getStep();
                },
                set: function(step){
                    this.store.setStep(step);
                },
            },
        },
        created() {},
        methods: {
            logout() {
                this.store.sessionData.isLogin=false;
                this.store.setStep('login');
            },
        },
        mounted() {},
        components: {
            Login,
            WebStore,
            WebStoreSelected,
        },
        beforeMount() {},
    };
</script>