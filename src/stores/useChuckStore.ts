import {ref} from "vue";
import {defineStore} from "pinia";
import {getFact} from "@/api/chuckprovider";

export const useChuckStore = defineStore("counter", () => {
    const facts = ref([]);
    const newFact = async () => {
        const fact = await getFact();
        facts.value.push(fact);
    };
    return {facts, newFact};
});
