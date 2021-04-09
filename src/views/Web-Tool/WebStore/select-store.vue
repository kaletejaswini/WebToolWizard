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
    <v-stepper-content step="select-store">
        <v-form
            ref="select-store"
            lazy-validation
        >                  
            <v-layout row wrap class="layout-row">
                <v-flex xs3>
                    <label aria-hidden="true">Select Web Store:</label>
                </v-flex>
                <v-flex xs9>
                    <v-select
                        :items="storeList"
                        outlined
                        v-model="selectStore"
                        @change="setStoreSelected()"
                    />
                </v-flex>                        
            </v-layout>
        </v-form>
    </v-stepper-content>                
</template>

<style>
    .layout-row {
        border: 1px solid #00000036;
        padding: 30px;
        margin: 30px auto !important;
        max-width: 745px;
    }
</style>
<script>
    import "vue-form-wizard/dist/vue-form-wizard.min.css";
    import Vue from "vue";
    import $ from "jquery";
    import StoreObserver from "../store";

    export default {
        data() {
            return {
                store: StoreObserver,
                selectStore: '',
                storeList: [
                    'Store No 123',
                    'Store No 345',
                    'Store No 789',
                    'Store No 000'
                ],
            };
        },
        created() {
            window.document.title = "Select Webstore";
        },
        methods: {
            setStoreSelected() {
                console.log('this.selectStore',this.selectStore);
                this.store.storeData.storeName = this.selectStore;
                this.store.setStep('store-selected');
            },
        },
        mounted() {},
        beforeMount() {},
    };
</script>
