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
    <v-stepper-content step="login">
        <v-form
            ref="login"
            v-model="validity.login"
            lazy-validation                    
        >
            <v-layout row wrap class="layout-row">
                <v-flex xs12>
                    <h3> Login </h3>
                </v-flex>
                <v-flex xs2>
                    <label aria-hidden="true">Username:</label>
                </v-flex>
                <v-flex xs10>
                    <v-text-field
                        name="Username"
                        maxlength="80"    
                        placeholder="Enter your Username"
                        :rules="validity.username"
                        outlined
                    />
                </v-flex>
                <v-flex xs2>
                    <label aria-hidden="true">Password:</label>
                </v-flex>
                <v-flex xs10>
                    <v-text-field
                        name="Password"
                        maxlength="80"    
                        placeholder="Enter Password"                        
                        :rules="validity.password"
                        outlined
                        type="password"
                    />
                </v-flex>
                <v-flex xs2></v-flex>
                <v-flex xs10>
                    <v-btn class="btn-primary login-btn" @click="login()">Login</v-btn>
                    <v-btn class="btn-secondary reset-btn" @click="reset()">Reset</v-btn>
                </v-flex>                        
            </v-layout>
        </v-form>
    </v-stepper-content>
</template>

<script>
    import Vue from "vue";
    import $ from "jquery";
    import * as validations from "../validations";
    import "./login.css";
    import StoreObserver from "../store";

    export default {
        data() {
            return {
                store: StoreObserver,

                validity: {
                    login: true,
                    username: [validations.nonblankRequired],
                    password: [validations.nonblankRequired],
                },
            };
        },
        computed: {},
        created() {
            window.document.title = "Login";
        },
        methods: {
            login(){
                if (this.$refs.login.validate()) {
                    this.store.sessionData.username='username';
                    this.store.sessionData.isLogin=true;
                    this.store.setStep('select-store');
                }                
            },
            reset() {
                this.$refs.login.reset()
            },
        },
        mounted() {},
        beforeMount() {},
    };
</script>