<template>
  <div class="form flex md:gap-16 max-md:flex-col">
    <div
      class="bg-white shadow-md w-full md:max-w-[448px] rounded-xl p-6 md:p-8 lg:p-10 max-md:mb-10 lg:max-w-[584px]"
    >
      <p class="text-xl font-medium mb-8 text-black">أرسل لنا رسالتك</p>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ errors }"
        class="w-full lg:max-w-[640px]"
      >
        <div class="flex max-lg:flex-col w-full gap-4 lg:gap-8 mb-8">
          <div class="flex flex-col w-full lg:max-w-[304px]">
            <label
              for="FullName"
              class="text-TextD3 w-fit font-normal text-sm mb-2 cursor-pointer inline-block"
            >
              {{ locale === "ar" ? "الاسم الأول" : "First Name" }}
            </label>
            <Field
              id="FullName"
              name="FullName"
              type="text"
              :placeholder="
                locale === 'en' ? 'Enter First Name' : 'أدخل اسمك الأول'
              "
              class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border focus:outline-none focus:ring-2 focus:ring-Primary"
              :class="{ '!border-red-500': errors.FullName }"
            />
            <span class="text-red-500 text-sm">{{ errors.FullName }}</span>
          </div>
          <div class="flex flex-col w-full lg:max-w-[304px]">
            <label
              for="LastName"
              class="text-TextD3 w-fit font-normal text-sm mb-2 cursor-pointer inline-block"
            >
              {{ locale === "ar" ? "الاسم الأخير" : "last Name" }}
            </label>
            <Field
              id="LastName"
              name="LastName"
              type="text"
              :placeholder="
                locale === 'en' ? 'Enter Last Name' : 'أدخل اسمك الأخير'
              "
              class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border focus:outline-none focus:ring-2 focus:ring-Primary"
              :class="{ '!border-red-500': errors.LastName }"
            />
            <span class="text-red-500 text-sm">{{ errors.LastName }}</span>
          </div>
        </div>
        <div class="flex flex-col w-full mb-6">
          <label
            for="email"
            class="text-TextD3 w-fit font-normal text-sm mb-2 cursor-pointer inline-block"
          >
            {{
              locale === "ar"
                ? "عنوان البريد الإلكتروني"
                : "e.g. name@domain.com"
            }}
          </label>
          <Field
            id="email"
            name="email"
            type="email"
            :placeholder="
              locale === 'en'
                ? 'Enter your email address'
                : 'أدخل عنوان بريدك الإلكتروني'
            "
            class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border focus:outline-none focus:ring-2 focus:ring-Primary"
            :class="{ '!border-red-500': errors.email }"
          />
          <span class="text-red-500 text-sm">{{ errors.email }}</span>
        </div>
        <div class="flex flex-col w-full mb-6">
          <label
            for="phoneNumber"
            class="text-text w-fit font-normal text-sm mb-2 cursor-pointer inline-block"
          >
            {{ locale === "ar" ? "رقم الهاتف" : "Phone Number" }}
          </label>
          <Field
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            :placeholder="
              locale === 'en' ? 'e.g. +9665xxxxxxx' : 'أدخل رقم الهاتف '
            "
            class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border focus:outline-none focus:ring-2 focus:ring-primary-main"
            :class="{ '!border-red-500': errors.phoneNumber }"
          />
          <span class="text-red-500 text-sm">{{ errors.phoneNumber }}</span>
        </div>

        <div class="flex flex-col w-full lg:max-w-[640px]">
          <label
            for="message"
            class="text-TextD3 w-fit font-normal text-sm mb-2 cursor-pointer inline-block"
          >
            {{ locale === "ar" ? "الرسالة" : "Message" }}
          </label>
          <Field
            id="message"
            name="message"
            as="textarea"
            :placeholder="
              locale === 'en'
                ? 'Write your project details or inquiry here'
                : 'اكتب رسالتك هنا'
            "
            class="inputBack p-4 w-full h-32 md:h-[160px] border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-Primary"
            :class="{ '!border-red-500': errors.message }"
          />
          <span class="text-red-500 text-sm">{{ errors.message }}</span>
        </div>
        <button
          type="submit"
          class="border w-full mt-10 rounded-2xl py-3 px-6 md:px-8 lg:px-10 flex justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-Primary text-white hover:bg-BtnBgPrimaryHover active:bg-BtnBgPrimaryPressed border-transparent"
        >
          <span class="text-xs md:text-sm lg:text-base font-medium"
            >ابدأ مشروعك الآن</span
          >
        </button>
        <p v-if="contactMessage" class="my-2 text-center text-primary-300">
          {{ contactMessage }}
        </p>
        <p v-if="contactMessageE" class="my-2 text-center text-red-500">
          {{ contactMessageE }}
        </p>
      </Form>
    </div>
    <div class="socailMedia w-full mx-auto max-w-[560px]">
      <div class="flex flex-col gap-4 md:gap-6">
        <div
          v-for="feature in Features"
          class="w-full bg-white p-2 md:py-6 md:px-8 flex justify-start items-center gap-3 md:gap-4 rounded-xl shadow-md"
        >
          <div
            class="bg-Secondary rounded-2xl p-2 md:p-3 flex justify-center items-center"
          >
            <img
              :src="feature.icon"
              :alt="feature.title"
              class="w-6 h-6"
              width="24"
              height="24"
            />
          </div>
          <div>
            <h2 class="text-xs md:text-sm font-normal text-Text mb-2">
              {{ feature.title }}
            </h2>
            <a
              :dir="locale === 'ar' ? 'ltr' : ''"
              :href="feature.link"
              target="_blank"
              :aria-label="feature.title"
            >
              <p
                class="text-TextD3 text-end font-normal text-xs md:text-sm md:!leading-[24px]"
              >
                {{ feature.description }}
              </p>
            </a>
          </div>
        </div>
      </div>
      <div
        class="gradientBg py-6 px-4 lg:py-10 lg:px-8 rounded-xl mt-6 md:mt-8 md:max-h-fit"
      >
        <h3
          class="text-lg lg:text-xl font-medium text-white mb-4 lg:mb-6 max-md:text-center"
        >
          هل لديك مشروع وتبحث عن حلول تعقيم مبتكرة؟
        </h3>
        <p
          class="text-TextL font-normal text-xs md:text-base max-md:text-center"
        >
          اطلب عرض السعر الآن من الشركة السعودية للأوزون لمناقشة احتياجاتك،
          واحصل على الحل الأمثل بتقنيات الأوزون المتطورة في أسرع وقت.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

import { Form, Field } from "vee-validate";
import * as yup from "yup";
const isOpenSuccess = ref(false);
const isLoading = ref(false);
const contactMessage = ref("");
const contactMessageE = ref("");
// const { sendEmail } = useEmail();

const subjects = [
  "تصميم ساحلي عصري",
  "تقييم المخاطر وتقليل المتغيّرات",
  "تطوير آليات الرقابة والمتابعة",
];

const schema = yup.object({
  FullName: yup
    .string()
    .min(
      3,
      locale.value === "en"
        ? "First name must be at least 3 characters"
        : "يجب أن يكون الاسم الأول على الأقل 3 أحرف"
    )
    .required(
      locale.value === "en" ? "First name is required" : "الاسم الأول مطلوب"
    ),
  LastName: yup
    .string()
    .min(
      3,
      locale.value === "en"
        ? "Last Name must be at least 3 characters"
        : "يجب أن يكون الاسم الأخير على الأقل 3 أحرف"
    )
    .required(
      locale.value === "en" ? "Last name is required" : "الاسم الأخير مطلوب"
    ),
  email: yup
    .string()
    .email(
      locale.value === "en" ? "Invalid email" : "البريد الإلكتروني غير صالح"
    )
    .required(
      locale.value === "en" ? "Email is required" : "البريد الإلكتروني مطلوب"
    ),

  phoneNumber: yup
    .string()
    .matches(
      /^(\+?20|0)?1[0-2,5]\d{8}$|^(\+?966|0)?5\d{8}$/,
      locale.value === "en"
        ? "Please enter a valid Egyptian or Saudi phone number"
        : "من فضلك أدخل رقم هاتف مصري أو سعودي صحيح"
    )
    .required(
      locale.value === "en" ? "Phone number is required" : "رقم الهاتف مطلوب"
    ),
  message: yup
    .string()
    .min(
      10,
      locale.value === "en"
        ? "Message must be at least 10 characters"
        : "يجب أن تحتوي الرسالة على 10 أحرف على الأقل"
    )
    .max(
      500,
      locale.value === "en"
        ? "Message cannot exceed 500 characters"
        : "يجب ألا تتجاوز الرسالة 500 حرف"
    )
    .required(locale.value === "en" ? "Message is required" : "الرسالة مطلوبة"),
});
const onSubmit = async (values: any, { resetForm }: any) => {
  try {
    isLoading.value = true;
    const { data, pending, error } = await useFetch(
      "https://bk.saudiozone.com.sa/api/contact/",
      {
        method: "POST",
        body: {
          first_name: values.FullName,
          last_name: values.LastName,
          phone: values.phoneNumber,
          email: values.email,
          message: values.message,
        },
      }
    );
    if (error.value) {
      throw new Error("Unknown error occurred");
    }
    if (data.value) {
      contactMessage.value =
        locale.value === "en"
          ? "Your message has been sent successfully"
          : "تم إرسال رسالتك بنجاح. سنتواصل معك قريباً";
      resetForm();
      isOpenSuccess.value = true;
    }
  } catch (error) {
    contactMessageE.value =
      locale.value === "en"
        ? "There was an error sending your message. Please try again later."
        : "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقاً.";
  } finally {
    isLoading.value = false;
  }
};
import mail from "../assets/img/Contact/mail.svg";
import telephone from "../assets/img/Contact/telephone.svg";
import location from "../assets/img/Contact/location.svg";
import minute from "../assets/img/Contact/minute.svg";

const Features = [
  {
    title: "البريد الإلكتروني",
    description: "info@saudiozone.com.sa",
    icon: mail,
    link: "https://mail.google.com/mail/?view=cm&to=info@saudiozone.com.sa",
  },
  {
    title: " رقم الهاتف",
    description: "+966 54 006 1616",
    icon: telephone,
    link: "tel:+966501234567",
  },
  {
    title: "عنوان المكتب",
    description:
      "المملكة العربية السعودية - جدة حي المنار امام مركز شرطة حي السامر",
    icon: location,
    link: "https://maps.app.goo.gl/R1doJaXcoE49Xfrr7",
  },
  {
    title: "ساعات العمل",
    description: "الأحد – الخميس، 9:00 صباحًا – 5:00 مساءً",
    icon: minute,
    link: "",
  },
];
</script>

<style scoped>
.inputBack {
  background-color: transparent;
  border: 1px solid #a3adba;
  color: #1a1f2b;
  border-radius: 12px;
}
</style>
