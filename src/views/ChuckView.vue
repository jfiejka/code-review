<template>
  <div class="user">
    <h1>Chuck facts</h1>
    <p>In archive {{archive.length}}</p>
    <p v-show="avVar">Average rating: {{ avVar }}</p>
    <div v-for="fact in factsArray" class="fact">
      <div v-if="doesRatingExist(fact.id)">
        <div class="rating">{{ ratings[fact.id] }}</div>
        <button class="remove-rating" @click="removeRating(fact.id)">remove rting</button>
      </div>
      <div v-else>
        This doesn't have a rating yet...
      </div>
      <p>{{ fact.value }}</p>
      <div class="rtaing-wrapper">
        <div class="rating1 flex-center" @click="rate(fact.id, 1)">1</div>
        <div class="rating2 flex-center" @click="rate(fact.id, 2)">2</div>
        <div class="rating3 flex-center" @click="rate(fact.id, 3)">3</div>
        <div class="rating4 flex-center" @click="rate(fact.id, 4)">4</div>
        <div class="rating5 flex-center" @click="rate(fact.id, 5)">5</div>
      </div>
      <div class="button-archive" @click="archiveFact(fact.id)">Archive</div>
      <div class="text-right">{{ getDate(fact.created_at) }}</div>
    </div>
    <button class="button" @click="newFact">New fact</button>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import {useChuckStore} from "@/stores/useChuckStore";
import {storeToRefs} from "pinia";

export default defineComponent({
  setup() {
    const {newFact, archiveFact} = useChuckStore();

    const {facts, archive} = storeToRefs(useChuckStore())

    const ratings = ref<Record<string, number>>({})
    const rate = (id: string, rateValue: number) => {
      ratings.value[id] = rateValue
    }
    const doesRatingExist = (id) => {
      if (ratings.value[id]) {
        return true
      } else {
        return false
      }
    }
    const removeRating = (id) => {
      delete ratings.value[id]
    }

    const factsArray = computed(() => {
      return facts.value
    })

    const getDate = (date: Date) => {
      return new Date(date).toLocaleString()
    }

    const avVar = computed(() => {
      return Object.values(ratings.value).reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0) / (Object.values(ratings.value).length || 1)
    })

    return {newFact, rate, ratings, doesRatingExist, removeRating, factsArray, getDate, avVar, archiveFact, archive};
  },
});
</script>

<style lang="less">
.button {
  background: #f2f2f2;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}

.fact {
  background: #f8f8f8;
  padding: 16px;
  color: #2c3e50;
  margin-bottom: 16px;
  border-radius: 10px;
}

.rtaing-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.rating1 {
  padding: 10px;
  background: indianred;
  margin-right: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background: cadetblue;
    color: indianred;
  }
}

.remove-rating {
  margin-left: 10px;
}

.rating2 {
  padding: 10px;
  background: indianred;
  margin-right: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background: cadetblue;
    color: indianred;
  }
}

.rating3 {
  padding: 10px;
  background: indianred;
  margin-right: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background: cadetblue;
    color: indianred;
  }
}

.rating4 {
  padding: 10px;
  background: indianred;
  margin-right: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background: cadetblue;
    color: indianred;
  }
}

.rating5 {
  padding: 10px;
  background: indianred;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background: cadetblue;
    color: indianred;
  }
}

.rating {
  padding: 10px;
  background: aquamarine;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: indianred;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  font-weight: bold;
}

.text-right {
  margin-top: 20px;
  text-align: right;
}
.button-archive {
  padding: 4px 10px;
  background: palevioletred;
  display: inline-flex;
  border-radius: 10px;
  cursor: pointer;

}
</style>
