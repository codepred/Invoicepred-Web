<script setup lang="ts">
import englishTranslation from '../assets/englishTranslation.json'
import polishTranslation from '../assets/polishTranslation.json'
import IconRemovingTick from './icons/IconRemovingTick.vue'
import IconPlusTick from './icons/IconPlusTick.vue'

import { ref, Ref, onMounted } from 'vue'

const useTranslation = ref<typeof englishTranslation>(englishTranslation)
const chosenLanguage = ref<string>('EN')

const props = defineProps({
    currency: { type: String, required: true }
})

console.log(props.currency)

interface ItemList {
    name: string;
    quantity: number | null;
    unit: string;
    netValue: string;
    vatRate: string;
    grossValue: string;
    //   [key: string]: boolean
}

const itemList: Ref<ItemList[]> = ref([
    {
        name: "",
        quantity: null,
        unit: "",
        netValue: "",
        vatRate: "",
        grossValue: "",
    }
])

interface SumOfValues {
    netValue: number | null;
    vatValue: number | null;
    bruttoValue: number | null;
    //   [key: string]: boolean
}

const sumOfValues: Ref<SumOfValues> = ref(
    {
        netValue: 0.00,
        vatValue: 0.00,
        bruttoValue: 0.00,
    }
)

const removeArrayRow = (index: number) => {
    itemList.value.splice(index, 1)
}

const addNewRow = () => {
    itemList.value.push({
        name: "",
        quantity: null,
        unit: "",
        netValue: "",
        vatRate: "",
        grossValue: "",
    })
}

onMounted(() => {
    if (chosenLanguage.value === 'EN') {
        useTranslation.value = englishTranslation
    }
    else if (chosenLanguage.value === 'PL') {
        useTranslation.value = polishTranslation
    }
    console.log(useTranslation.value.invoiceTerms.number)

    console.log(itemList.value)
})

</script>

<template>
    <div class="main-panel">
        <div>
            <input class="input-class" :placeholder="useTranslation?.invoiceTerms?.number">
        </div>
        <div>
            <input class="input-class" :placeholder="useTranslation?.invoiceTerms?.issueDate" type="date">
        </div>
        <div>
            <input class="input-class" :placeholder="useTranslation?.invoiceTerms?.placeOfIssue">
        </div>
        <div>
            <input class="input-class" :placeholder="useTranslation?.invoiceTerms?.saleDate" type="date">
        </div>
    </div>
    <div class="main-panel" style="justify-content: space-between;">
        <div style="display: flex; width: 40%; flex-direction: column; gap: 15px; justify-content: left;">
            <div class="title-text">
                {{ useTranslation?.invoiceTerms?.sellerTitle }}
            </div>
            <div>
                <textarea class="input-class" :placeholder="useTranslation?.invoiceTerms?.sellerData"
                    style="height: 150px;">

                </textarea>
            </div>
            <!-- <div>
                <input class="input-class" :placeholder="useTranslation?.invoiceTerms?.sellerBank">
            </div>
            <div>
                <input class="input-class" :placeholder="useTranslation?.invoiceTerms?.sellerAccountNumber">
            </div> -->
        </div>
        <div style="display: flex; width: 40%; flex-direction: column; gap: 15px; justify-content: right;">
            <div class="title-text">
                {{ useTranslation?.invoiceTerms?.buyerTitle }}
            </div>
            <div>
                <textarea class="input-class" style="height: 150px;" :placeholder="useTranslation?.invoiceTerms?.buyerData">

                </textarea>
            </div>
        </div>
    </div>
    <div class="main-panel" style="justify-content: space-between; flex-direction: column; gap: 40px">
        <div class="title-text">
            {{ useTranslation?.invoiceItems?.title }}
        </div>
        <div>
            <table style="width: 100%;">
                <thead>
                    <th>
                        {{ useTranslation?.invoiceItems?.itemName }}
                    </th>
                    <th style="width: 10%;">
                        {{ useTranslation?.invoiceItems?.quantity }}
                    </th>
                    <th style="width: 10%;">
                        {{ useTranslation?.invoiceItems?.unit }}
                    </th>
                    <th style="width: 15%;">
                        {{ useTranslation?.invoiceItems?.priceNetto }}
                    </th>
                    <th style="width: 10%;">
                        {{ useTranslation?.invoiceItems?.vat }}
                    </th>
                    <th style="width: 15%;">
                        {{ useTranslation?.invoiceItems?.priceBrutto }}
                    </th>
                    <th>

                    </th>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in itemList" :key="index" style="gap: 10px;">
                        <td>
                            <input class="input-class" v-model="item.name"
                                :placeholder="useTranslation?.invoiceItems?.itemName">
                        </td>
                        <td>
                            <input class="input-class" v-model="item.quantity" type="number"
                                :placeholder="useTranslation?.invoiceItems?.quantity">
                        </td>
                        <td>
                            <input class="input-class" v-model="item.unit"
                                :placeholder="useTranslation?.invoiceItems?.unit">
                        </td>
                        <td>
                            <input class="input-class" v-model="item.netValue"
                                :placeholder="useTranslation?.invoiceItems?.priceNetto">
                        </td>
                        <td>
                            <input class="input-class" v-model="item.vatRate" type="number"
                                :placeholder="useTranslation?.invoiceItems?.vat">
                        </td>
                        <td>
                            <input class="input-class" v-model="item.grossValue"
                                :placeholder="useTranslation?.invoiceItems?.priceBrutto">
                        </td>
                        <td style="width: 24px; height: 24px;">
                            <IconRemovingTick @click="removeArrayRow(index)" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style="display: flex; gap: 12px; margin-top: 20px; margin-left: 20px; width: fit-content; cursor: pointer;" @click="addNewRow()">
                <IconPlusTick style="height: 16px; width: 16px;" />
                <span style="font-size: 14px;">
                    {{ useTranslation?.invoiceItems?.addNewItem }}
                </span>
            </div>
            <div style="text-align: right; width: 100%; height: fit-content; display: flex; gap: 20px; justify-content: flex-end; padding-right: 50px;">
                <div style="flex-direction: column; display: flex; text-align: left; gap: 10px">
                    <div>
                        {{ useTranslation?.paymentValues?.nettoValue }}
                    </div>
                    <div>
                        {{ useTranslation?.paymentValues?.vatValue }}
                    </div>
                    <div>
                        {{ useTranslation?.paymentValues?.grossValue }}
                    </div>
                </div>
                <div style="flex-direction: column; display: flex; gap: 10px;">
                    <div>
                        <span style="font-weight: 700">
                            {{ sumOfValues.netValue?.toFixed(2) }} {{ props?.currency }}
                        </span>
                    </div>
                    <div>
                        <span style="font-weight: 700">
                            {{ sumOfValues.vatValue?.toFixed(2) }} {{ props?.currency }}
                        </span>
                    </div>
                    <div>
                        <span style="font-weight: 700">
                            {{ sumOfValues.bruttoValue?.toFixed(2) }} {{ props?.currency }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-panel {
    width: 100%;
    max-width: 1200px;
    height: fit-content;
    padding-top: clamp(15px, 5%, 30px);
    padding-right: clamp(10px, 5%, 50px);
    padding-left: clamp(10px, 5%, 50px);
    padding-bottom: clamp(15px, 5%, 30px);
    background: #FFFFFF;
    border: 1px solid #DEDEEC;
    border-radius: 8px;
    display: flex;
    gap: 10px;
}

.main-panel>div {
    width: 100%;
}

table {
    border-collapse: collapse;
    padding: 16px 8px;
}

thead {
    text-transform: uppercase;
    padding: 16px 8px;
    border-bottom: 1px solid #DEDEEC;
    font-size: 12px;
    font-weight: 500;
    height: 58px;
}

td {
    padding: 16px 8px 0px 8px;
}

th {
    text-align: left;
    padding-left: 16px;
}

</style>