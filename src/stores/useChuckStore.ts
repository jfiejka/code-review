import {ref} from "vue";
import {defineStore} from "pinia";
import {getFact} from "@/api/chuckprovider";

export const useChuckStore = defineStore("counter", () => {
    const facts = ref([]);
    const archive = ref([])
    const newFact = async () => {
        const fact = await getFact();
        facts.value.push(fact);
    };
    const archiveFact = (id) => {
        archive.value.push(facts.value.find(f => f.id));
        console.log(facts.value.filter(f => f.id !== id))
        console.log(id)
        facts.value = facts.value.filter(f => f.id !== id);
    }
    return {facts, newFact, archive, archiveFact};
});
