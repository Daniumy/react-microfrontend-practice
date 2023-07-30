import { createApp } from "vue";
import Card from "./components/Cards.vue";

export default function placeCards(el) {
     createApp(Card).mount(el);
}