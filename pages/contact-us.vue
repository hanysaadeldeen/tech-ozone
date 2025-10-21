<template>
  <main class="contactPage max-xl:px-6">
    <GredientHero
      title="تواصل معنا بكل سهولة"
      description="نحن في الشركة السعودية للأوزون جاهزون للرد على استفساراتك وتقديم الدعم لاحتياجاتك. تواصل معنا عبر النموذج أو وسائل الاتصال المتاحة، وسنكون سعداء بخدمتك."
    />

    <div class="w-full max-w-[1208px] mx-auto mt-[60px] md:mt-[120px]">
      <div class="form flex md:gap-16 max-md:flex-col">
        <div
          class="bg-white shadow-md w-full md:max-w-[448px] rounded-xl p-6 md:p-8 lg:p-10 max-md:mb-10 lg:max-w-[584px]"
        >
          <h1 class="text-xl font-medium mb-8 text-black">أرسل لنا رسالتك</h1>
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
            <div class="flex flex-col w-full mb-8">
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
            <div class="flex flex-col w-full mb-8">
              <label
                for="subject"
                class="text-TextD3 w-fit font-normal text-sm mb-2 cursor-pointer inline-block"
              >
                {{ locale === "ar" ? "الموضوع" : " Request Type" }}
              </label>
              <Field
                id="subject"
                name="subject"
                as="select"
                class="inputBack px-2.5 md:px-4 h-[48px] w-full border focus:outline-none focus:ring-2 focus:ring-Primary"
                :class="{ '!border-red-500': errors.subject }"
              >
                <option
                  value=""
                  disabled
                  selected
                  class="text-paragraph-mediumDark"
                >
                  {{ locale === "en" ? "Select Request Type" : "اختر الموضوع" }}
                </option>
                <option
                  v-for="option in subjects"
                  :key="option"
                  :value="option"
                >
                  {{ $t(option) }}
                </option>
              </Field>
              <span class="text-red-500 text-sm">{{ errors.subject }}</span>
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
                <h3 class="text-xs md:text-sm font-normal text-Text mb-2">
                  {{ feature.title }}
                </h3>
                <a
                  :dir="locale === 'ar' ? 'ltr' : ''"
                  :href="feature.link"
                  target="_blank"
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
            <div
              class="border rounded-full py-2.5 px-10 w-fit flex max-md:mx-auto items-center justify-center flex-wrap gap-2 mt-8 cursor-pointer"
            >
              <p class="text-sm md:text-base font-medium text-white">
                اطلب عرض سعر الآن
              </p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <section-title
          btnText="موقعنا الاستراتيجي على الخريطة"
          description="تواجدنا لخدمة شركاؤنا في مختلف القطاعات"
        />
        <div class="relative w-full max-w-[708px] mx-auto">
          <div
            class="absolute left-1/2 w-full mx-auto max-w-[504px] -translate-x-1/2 top-1/2 -translate-y-1/2"
          >
            <div
              class="relative w-full rounded-xl shadow-lg p-6 md:py-10 md:px-8 bg-white flex flex-col justify-center items-center"
            >
              <h1
                class="text-TextD2 text-base font-medium mb-1 md:mb-3 text-center"
              >
                الشركة السعودية للأوزون
              </h1>
              <p
                class="text-TextD3 text-sm font-normal text-center max-w-[400px] mx-auto mb-4 md:mb-8"
              >
                المملكة العربية السعودية - جدة حي المنار امام مركز
                شرطة حي السامر
              </p>
              <a
                href="https://maps.app.goo.gl/R1doJaXcoE49Xfrr7"
                target="_blank"
              >
                <Button title="احصل علي الاتجاهات" background="#ED2024" reverse>
                  <i class="fa-solid fa-diamond-turn-right"></i>
                </Button>
              </a>
              <div
                class="bg-transparent absolute -bottom-12 left-1/2 -translate-x-1/2 border-[28px] border-white border-b-transparent border-x-transparent"
              ></div>
            </div>
            <div class="mt-9 text-center">
              <img
                src="~/assets/img/Utils/locationPin.svg"
                alt="locationPin"
                loading="lazy"
                class="w-fit mx-auto"
              />
            </div>
          </div>
          <div class="w-full max-w-full max-sm:invisible">
            <img
              src="~/assets/img/Utils/SaudiMap.svg"
              alt="SaudiMap"
              loading="lazy"
              class="w-full max-w-full"
            />
          </div>
        </div>
      </section>
      <section class="max-w-[792px] mx-auto">
        <section-title
          btnText="الأسئلة الشائعة"
          description="إجابات واضحة على أكثر استفساراتكم"
        />
        <div class="mb-20 relative">
          <FAQ
            v-for="(faq, index) in FAQs"
            :id="faq.id"
            :question="faq.question"
            :answer="faq.answer"
            :toggle="faq.toggle"
          />
        </div>
        <Button title="استعرض جميع الأسئلة" background="#092892" link="/faqs" />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();

import { Form, Field } from "vee-validate";
import * as yup from "yup";
const isOpenSuccess = ref(false);
const isLoading = ref(false);
const { sendEmail } = useEmail();

const subjects = [
  "تصميم ساحلي عصري",
  "تقييم المخاطر وتقليل المتغيّرات",
  "تطوير آليات الرقابة والمتابعة",
];

const FaqsFilter = ref("all");

const faqs = {
  questionOne: {
    title: "كم يستغرق الرد على الرسائل؟",
    answer: "نرد عادة خلال 24 ساعة عمل على الرسائل والاستفسارات.",
  },
  questionTwo: {
    title: "هل يمكنني التواصل دون فكرة واضحة؟",
    answer: "نعم، نحن هنا لمساعدتك من أول خطوة — حتى لو كانت فكرتك غير مكتملة.",
  },
  questionThree: {
    title: "هل تعملون مع جهات خارج السعودية؟",
    answer:
      "نحن شركة سعودية، ولكن نخدم عملاء محليين ودوليين عن بُعد بكفاءة واحترافية.",
  },
  questionFour: {
    title: "ما تكلفة تصميم   في السعودية؟",
    answer: "تختلف حسب المشروع. يمكنك طلب عرض سعر عبر نموذج التواصل.",
  },
  questionSix: {
    title: "ما الفرق بين البرمجة المخصصة والتصميم الجاهز؟",
    answer: "البرمجة المخصصة توفر مرونة أكبر. تصفح أعمالنا لتفهم الفرق.",
  },
  questionSeven: {
    title: "هل يمكن تنفيذ المشروع بالكامل عن بُعد؟",
    answer: "بالتأكيد، ونعمل بكفاءة عالية. تعرف علينا من خلال صفحة عن الشركة.",
  },
};

const FAQs = [
  {
    id: 1,
    question: faqs.questionOne.title,
    answer: faqs.questionOne.answer,
    toggle: true,
  },
  {
    id: 2,
    question: faqs.questionTwo.title,
    answer: faqs.questionTwo.answer,
    toggle: true,
  },
  {
    id: 3,
    question: faqs.questionThree.title,

    answer: faqs.questionThree.answer,
    toggle: false,
  },
  {
    id: 4,
    question: faqs.questionFour.title,

    answer: faqs.questionFour.answer,
    toggle: false,
  },
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
      /^\+?[0-9]{10,}$/,
      locale.value === "en"
        ? "Number must be at least 10 digits"
        : "يجب أن يكون الرقم على الأقل 10 أرقام"
    )
    .required(
      locale.value === "en" ? "Phone number is required" : "رقم الهاتف مطلوب"
    ),

  subject: yup
    .string()
    .required(
      locale.value === "en" ? "Please select a subject" : "يرجى اختيار موضوع"
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
const onSubmit = async (values: any) => {
  try {
    isLoading.value = true;
    const response = await sendEmail(values);

    if (response.status === 200) {
      console.log("success");
    }
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    isOpenSuccess.value = true;
  }
};
import mail from "../assets/img/Contact/mail.svg";
import telephone from "../assets/img/Contact/telephone.svg";
import location from "../assets/img/Contact/location.svg";
import minute from "../assets/img/Contact/minute.svg";

const Features = [
  {
    title: "البريد الإلكتروني",
    description: "info@techozone.sa",
    icon: mail,
    link: "https://mail.google.com/mail/?view=cm&to=info@techozone.sa",
  },
  {
    title: " رقم الهاتف",
    description: "+966 50 123 4567",
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
