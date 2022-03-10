import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import FormCard from "@/components/FormCard.vue";
import TheTranstation from "@/components/TheTranstation.vue";
import FormLoading from "@/components/FormLoading.vue";
import FormSuccess from "@/components/FormSuccess.vue";
import ModalBasket from "@/components/ModalBasket.vue";
import ModalConfirm from "@/components/ModalConfirm.vue";
import ModelAnimate from "@/components/ModelAnimate.vue";
import ModalSuccessPay from "@/components/ModalSuccessPay.vue";
import FormCardLoading from "@/components/FormCardLoading.vue";
import "@/assets/scss/main.scss";

const app = createApp(App);
app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);
app.component("form-card", FormCard);
app.component("the-transtation", TheTranstation);
app.component("form-loading", FormLoading);
app.component("form-success", FormSuccess);
app.component("modal-basket", ModalBasket);
app.component("modal-confirm", ModalConfirm);
app.component("model-animate", ModelAnimate);
app.component("modal-success-pay", ModalSuccessPay);
app.component("form-card-loading", FormCardLoading);
app.use(router);
app.mount("#app");
