export const QuestionsOnpremise = {
  title: "Rozwiązanie on-premise telefonii IP",
  completedHtmlOnCondition: [
    {
      expression: "{total} > 0",
      html: {
        default:
          " <h2>Dziękujemy za wypełnienie ankiety! <h2/> <h3> Koszt Twojego systemu teleinformatycznego to {total}. <br> W tym: Cena systemu: {systemPrice}. <br> Cena telefonów: {phonesPrice} <h3/>",
      },
    },
  ],

  pages: [
    {
      name: "cloud-solution",
      navigationTitle: "Krok 1",
      navigationDescription: "Twoje wymagania",
      description:
        "Wypełnij ankietę aby otrzymać wstępną wycenę Twojego rozwiązania chmurowego",
      elements: [
        {
          type: "panel",
          name: "ipTelephony",
          title: "Telefonia IP",

          isRequired: true,
          elements: [
            {
              type: "radiogroup",
              name: "ifHaveTelephony",
              title: "Czy posiadasz już jakieś rozwiązanie telefonii IP?",
              choices: [
                {
                  value: true,
                  text: "Tak",
                },
                { value: false, text: "Nie" },
              ],
            },
            {
              name: "whichTelephony",
              type: "text",
              isRequired: true,
              visibleIf: "{ifHaveTelephony} = true",
              title: "Jakiego dostawcy rozwiązanie posiadasz?",
            },
            {
              type: "text",
              inputType: "number",
              isRequired: true,
              name: "numberPhones",
              min: 1,
              max: 3000,
              title: "Dla ilu użytkowników potrzebujesz telefonów?",
            },

            {
              type: "matrix",
              name: "whichDevices",
              // titleLocation: "left",
              title: "Jakie telefony/urządzenia do komunikacji?",
              columns: [
                {
                  value: "yes",
                  text: "Tak",
                },
                {
                  value: "no",
                  text: "Nie",
                },
              ],
              rows: [
                {
                  value: "deskPhones",
                  text: "Telefony IP biurkowe",
                },
                { value: "dect", text: "Słuchawki DECT" },
                { value: "softphone", text: "Softphone" },
                {
                  value: "vantage",
                  text: "Avaya Vantage: telefony-tablety",
                },
              ],
            },
            {
              type: "text",
              name: "numberDeskphone",
              visibleIf: "{whichDevices.deskPhones} = 'yes'",
              inputType: "number",
              title: "Ile TELEFONÓW BIURKOWYCH potrzebujesz?",
            },
            {
              type: "text",
              inputType: "number",
              isRequired: " {whichDevices.dect} = 'yes'",
              visibleIf: " {whichDevices.dect} = 'yes'",
              name: "numberDect",
              title: "Ile SŁUCHAWEK DECT potrzebujesz?",
            },
            {
              type: "text",
              inputType: "number",
              isRequired: true,
              visibleIf: "{whichDevices.softphone} = 'yes'",
              name: "numberSoftphone",
              title: "Ile SOFTPHONE potrzebujesz?",
            },
            {
              type: "imagepicker",
              name: "deskphoneModel",
              title: "Wybierz modele telefonów biurkowych",
              description: "Możliwość wyboru kilku modeli",
              visibleIf: "{whichDevices.deskPhones} = 'yes'",
              isRequired: true,
              choices: [
                {
                  value: "lion",
                  imageLink:
                    "https://allvoicestore.com/environment/cache/images/500_500_productGfx_242/telefon_J139_deskphone_ip_allvoicestore_avaya.webp",
                  text: "J139",
                  description: "Please select all that apply.",
                },
                {
                  value: "giraffe",
                  imageLink:
                    "https://allvoicestore.com/environment/cache/images/500_500_productGfx_281/J159-1.webp",
                  text: "J159",
                },
                {
                  value: "red-panda",
                  imageLink:
                    "https://www.avaya.com/en/images/device-catalog/1399762751231/j179-(1).png&IMG=true",
                  text: "J179",
                },
                {
                  value: "camel",
                  imageLink:
                    "https://allvoicestore.com/userdata/public/gfx/250/telefon_J129_deskphone_ip_avaya_allvoicestore_3.webp",
                  text: "J129",
                },
              ],
              showLabel: true,
              multiSelect: true,
            },
            {
              type: "text",
              inputType: "number",
              isRequired: true,
              visibleIf: "{whichDevices.vantage} = 'yes'",
              name: "numberVantage",
              title: "Ile TELEFONÓW-TABLETÓW potrzebujesz?",
            },
            {
              type: "tagbox",
              name: "whichFunctionalities",
              title: "Jakich funkcjonalności potrzebujesz?",
              choices: [
                { value: 100, text: "Nagrywanie rozmów" },
                {
                  value: 1000,
                  text: "Zaawansowane raportowanie",
                },
                { value: 1500, text: "Chatbot" },
                { value: 1800, text: "Voicebot" },
                {
                  value: 5000,
                  text: "Integracja z CRM",
                },
              ],
              // isRequired: true,
            },
            //   ],
            // },
            // {
            //   type: "panel",
            //   name: "ipTelephony",
            //   startWithNewLine: false,
            //   title: "Kalkulator kosztów:",

            //   elements: [
            {
              type: "expression",
              name: "systemPrice",
              title: "Wartość systemu:",
              expression: "sum({whichFunctionalities})",
              displayStyle: "currency",
              currency: "PLN",
              // startWithNewLine: false,
            },
            {
              type: "expression",
              name: "phonesPrice",
              title: "Wartość telefonów:",
              expression:
                "{numberDeskphone} * 450 + {numberDect} * 300 + {numberSoftphone} * 350 * {numberVantage} * 550",
              displayStyle: "currency",
              currency: "PLN",
            },
            {
              type: "expression",
              name: "total",
              title: "SUMA:",
              expression: "{systemPrice} + {phonesPrice}",
              displayStyle: "currency",
              currency: "PLN",
            },
          ],
        },
      ],
    },
    {
      name: "survey",
      navigationTitle: "Krok 2",
      navigationDescription: "Twoje dane",
      elements: [
        {
          type: "panel",
          name: "yourData",
          title: "Podaj swoje dane aby otrzymać wycenę",
          elements: [
            {
              type: "text",
              name: "firstName",
              title: "Imię:",
              isRequired: true,
            },
            {
              type: "text",
              name: "lastName",
              title: "Nazwisko:",
              isRequired: true,
            },
            {
              type: "text",
              inputType: "text",
              name: "email",
              title: "Adres email:",
              validators: [
                {
                  type: "email",
                  text: {
                    pl: "Wprowadź poprawny adres email",
                  },
                },
              ],
              isRequired: true,
            },
            {
              type: "text",
              inputType: "number",
              name: "phone",
              title: "Numer telefonu:",
              validators: [
                {
                  type: "numeric",
                },
              ],
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
  calculatedValues: [
    {
      name: "var1",
    },
  ],
  questionErrorLocation: "bottom",
  // questionTitleLocation: "left",
  showProgressBar: "top",
  progressBarType: "buttons",
  pagePrevText: {
    pl: "Poprzednia strona",
  },
  pageNextText: {
    pl: "Dalej",
  },
  completeText: {
    pl: "Potwierdź",
  },
  previewText: {
    pl: "Zobacz swoje odpowiedzi",
  },
  editText: {
    pl: "Edytuj swoje odpowiedzi",
  },
};
