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
    <v-stepper-content step="store-selected">
        <v-form
            ref="store-selected"
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
                        disabled                        
                    />
                </v-flex>
                

                <v-flex xs6>
                    <v-btn class="shares-btn" @click="exportSharesBlanceReport()">Export Share Balance Report</v-btn>
                </v-flex>
                <v-flex xs6>
                    <v-btn class="shares-btn" @click="exportRedemptionReport()">Export Redemption Report</v-btn>
                </v-flex>
                <v-flex xs6>
                    <v-btn class="shares-btn" @click="openReinstateSharesDialog()">Reinstate Shares After Cancel</v-btn>
                </v-flex>
                <v-flex xs6>
                    <v-btn class="shares-btn" @click="openRemoveSharesDialog()">Remove Shares</v-btn>
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
    button.shares-btn {
        width: 230px;
        margin: 10px auto;
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
                storeList: [
                    'Store No 123',
                    'Store No 345',
                    'Store No 789',
                    'Store No 000'
                ],
            };
        },
        created() {
            window.document.title = "Webstore Selected";
        },
        methods: {
            exportSharesBlanceReport() {
                console.log('click on button >>> Export Share Balance Report');                
            },
            exportRedemptionReport() {
                console.log('click on button >>> Export Redemption Report');                
            },
            openReinstateSharesDialog() {
                console.log('click on button >>> Reinstate Shares After Cancel');                
            },
            openRemoveSharesDialog() {
                console.log('click on button >>> Remove Shares');                
            },
        },
        mounted() {},
        beforeMount() {},
    };
</script>
