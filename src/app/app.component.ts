import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NzTreeNodeOptions} from "ng-zorro-antd/tree";
import {NzModalService} from "ng-zorro-antd/modal";

const NO_WHITE_SPACES_ONLY = (control: any) => {
  if (control.value && control.value.trim() != '') {
    return null;
  }
  else {
    return { 'required': true };
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'new-app';

  // Stepper
  step: number = 1;
  MAX_STEP: number = 17


  addressOptions = [
    {
      optionLabel: 'Ashiyana / LDA Colony – Sector A, B, H, I, K, L, O, D, D1, G, N, N1, M & Hind Nagar',
      optionValue: 1,
    },
    {
      optionLabel: 'Bangla Bazar / Mansarovar Yojana / Sharda Nagar / South City',
      optionValue: 2,
    },
    {
      optionLabel: 'Indralok Colony/Manas Nagar / Ashutosh Nagar',
      optionValue: 3,
    },
    {
      optionLabel: 'Sarojini Nagar (South of Airport)',
      optionValue: 4,
    },
    {
      optionLabel: 'Singar Nagar / Alambagh / Sardari Khera / Adarsh Nagar',
      optionValue: 5,
    },
    {
      optionLabel: 'Omaxe city / Eldeco Udyan II',
      optionValue: 6,
    },
    {
      optionLabel: 'Vrindavan Colony – sector 1 to 19A ',
      optionValue: 7,
    },
    {
      optionLabel: 'Emaar Gomti Greens / Ansal Golf City / Arjun Ganj',
      optionValue: 8,
    },
    {
      optionLabel: 'Gomti Nagar – all sectors, Khands - Vipul, Vishal, Vivek, Viram, Vibuti, Vijayant and Vikas Khand',
      optionValue: 9,
    },
    {
      optionLabel: 'Indira Nagar / Aliganj / Maha Nagar',
      optionValue: 10,
    },
    {
      optionLabel: 'Bada & Chota Imambada/ Moti Jheel Colony / Aminabad',
      optionValue: 11,
    },
    {
      optionLabel: 'Hazratganj / Civil Lines / Ekalavya Nagar / Dalibagh Colony',
      optionValue: 12,
    },
    {
      optionLabel: 'Rajajipuram',
      optionValue: 13,
    },
    {
      optionLabel: 'Lucknow Cantonment',
      optionValue: 14,
    },
    {
      optionLabel: 'Others',
      optionValue: 15,
    },
  ]

  ageGroupOptions = [
    {
      optionLabel: 'Below 21',
      optionValue: 1,
    },
    {
      optionLabel: '21-35',
      optionValue: 2,
    },
    {
      optionLabel: '36-45',
      optionValue: 3,
    },
    {
      optionLabel: '46-55',
      optionValue: 4,
    },
    {
      optionLabel: '56-65',
      optionValue: 5,
    },
    {
      optionLabel: 'Above 65',
      optionValue: 6,
    },
  ]

  connectionOptions = [
    {
      optionLabel: 'Born / Raised in Lucknow',
      optionValue: 1,
    },
    {
      optionLabel: 'Retired in Lucknow',
      optionValue: 2,
    },
    {
      optionLabel: 'Shifted to Lucknow for higher education (UG / PG / Doctorate)',
      optionValue: 3,
    },
    {
      optionLabel: 'Shifted to Lucknow for Job / Business / Work',
      optionValue: 4,
    },
    {
      optionLabel: 'Married and relocated to city ',
      optionValue: 5,
    },
    {
      optionLabel: 'Others',
      optionValue: 6,
    },
  ]

  timeInLucknow =[
    {
      optionLabel: 'Less than 1.5 years',
      optionValue: 1,
    },
    {
      optionLabel: '1.5 – 5 years',
      optionValue: 2,
    },
    {
      optionLabel: 'More than 5 years',
      optionValue: 3,
    },
  ]

  residenceOptions = [
    { optionLabel: "Residential Apartment (5 floors & above)", optionValue: 1 },
    { optionLabel: "Independent House – Kothi / Bungalow / Villa", optionValue: 2 },
    { optionLabel: "Builder Floor – Low-rise apartment (upto 4 floors)", optionValue: 3 },
    { optionLabel: "Other", optionValue: 4 }
  ];

  statusOptions = [
    { optionLabel: "Ancestral/ Joint Property", optionValue: 1 },
    { optionLabel: "Self-Owned", optionValue: 2 },
    { optionLabel: "Rented House / Company Lease", optionValue: 3 }
  ];

  market_values = [
    "Less than INR 50 Lakhs",
    "INR 50 to 1.0 Crore",
    "INR 1.1 to 2.5 Crore",
    "Above INR 2.5 Crore"
  ]

  family_members = [
    "2 – 3",
    "4 - 6",
    "7 - 9",
    "10 or more"
  ]

  q9Options = [
    {
      label: 'Professional (Doctor, Lawyer, Architect, Educationalist, etc.)'
    },
    {
      label: 'Trader / Wholesaler / Retailer'
    },
    {
      label: 'Business - Manufacturing & Industrial / Services'
    },
    {
      label: 'Service (Govt. / Public / Private Sector Employee)'
    },
    {
      label: 'Retired'
    },
  ]

  q10Options = new Map([
    ['Maruti', ['Wagon R',
      'Dzire/Baleno',
      'Breeza',
      'Grand Vitara/Jimny',
      'Ciaz',
      'Invicto',
      'Other']],
    ['Hyundai / KIA', [
      'i20',
      'Venue/Sonet',
      'Creta/Seltos',
      'Verna',
      'Carrens',
      'Carnival',
      'Other'
    ]],
    ['Tata', [
      'Tigor',
      'Tiago',
      'Altros',
      'Nexon',
      'Harrier',
      'Safari',
      'Other'
    ]],
    ['Mahindra', [
      'Bolero',
      'TUV / XUV 300',
      'Thar',
      'Scorpio',
      'XUV 500',
      'XUV 700',
      'Other'
    ]],
    ['Jeep', [
      'Compass',
      'Meridian',
      'Cherokee',
      'Grand Cherokee',
      'Other'
    ]],
    ['Nissan / Renault', [
      'Micra',
      'Triber',
      'Kiger/Magnite',
      'Scala / Sunny',
      'Duster/Terrano',
      'X-Trail',
      'Other'
    ]],
    ['Honda', [
      'Brio',
      'Jazz',
      'WRV / Amaze',
      'BRV / Brillio',
      'City',
      'CRV / Civic',
      'Other'
    ]],
    ['Toyota', [
      'Etio Liva',
      'Etio / Urban Crusier',
      'Yaris / Hyrider',
      'Innova / Crysta',
      'Crysta Hyrider',
      'Fortuner / Camry',
      'Other'
    ]],
    ['Ford', [
      'Figo',
      'Fiesta',
      'Ecosport',
      'Endeavour',
      'Other'
    ]],
    ['Chevrolet', [
      'Beat',
      'Cruze',
      'Trailblazer',
      'Other'
    ]],
    ['Volkswagen / Skoda', [
      'Vento / Rapid',
      'Kushaq / Taigun',
      'Virtus / Slavia',
      'Octavia / Jetta',
      'Passat / Superb',
      'T-Roc / Tiguan',
      'Other'
    ]],
    ['BMW', [
      '3 Series / X1',
      '5 Series / X3',
      'X5',
      'X6 / 7 Series',
      'Other'
    ]],
    ['Audi', [
      'A3',
      'A4',
      'A6',
      'A8',
      'Other'
    ]],
    ['Mercedes', [
      'A Class',
      'B Class',
      'C Class',
      'S Class',
      'G Glass',
      'Other'
    ]],
    ['Volvo', ['XC 40', 'XC 90']],
    ['Other', []]
  ]);

  q12Options = [
    'Indian Traditional wear – Specific Occasions (Lehangas, Dresses, Sarees, Sherwanis, Kurtas, etc.)',
    'Accessories (Handbags, Wallets, Watches, sunglasses, scarves, etc.)',
    'Western Wear – International brands (Allen Solly, AND, Armani Exchange, Arrow, Calvin Klein, Chique, etc.)',
    'Family Outing – Movies & Gaming',
    'Cultural Events / Art Events',
    'Dining with friends – Restaurants / Pubs',
    'Dining with family - Restaurants',
    'Partying - Clubbing & Restro-bars'
  ]

  q13Options = [
    'Indian Traditional wear – Specific Occasions (Lehangas, Dresses, Sarees, Sherwanis, Kurtas, etc.)',
    'Accessories (Handbags, Wallets, Watches, sunglasses, scarves, etc.)',
    'Western Wear – International brands (Allen Solly, AND, Armani Exchange, Arrow, Calvin Klein, Chique, etc.)',
    'Designer Jewellery'
  ];

  q15Options = [
    'Family Outing – Movies & Gaming',
    'Cultural Events / Art Events',
    'Dining with friends – Restaurants',
    'Partying - Clubbing & Restro-bars'
  ];

  q10: NzTreeNodeOptions[]

  q12IndexMap: any = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    '3': 'd',
    '4': 'e',
    '5': 'f',
    '6': 'g',
    '7': 'h',
  };

  personalInformationForm = new FormGroup({
    // name: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q1: new FormControl(null, [Validators.required]),
    q2: new FormControl(null, [Validators.required]),
    q3: new FormControl(null, [Validators.required]),
    q4: new FormControl(null, [Validators.required]),
    q5: new FormControl(null, [Validators.required]),
    q6: new FormControl(null, [Validators.required]),
    q7: new FormControl(null, [Validators.required]),
    q8: new FormControl(null, [Validators.required]),
    q9a: new FormControl(null, [Validators.required]),
    q9b: new FormControl(null),
    q9c: new FormControl(null),
    q10: new FormControl<any>(null, [Validators.required]),

    q11: new FormControl(null, [Validators.required]),
    q11Extra: new FormControl<string | null>(null, [Validators.required,NO_WHITE_SPACES_ONLY]),

    q12a: new FormControl(null, [Validators.required]),
    q12b: new FormControl(null, [Validators.required]),
    q12c: new FormControl(null, [Validators.required]),
    q12d: new FormControl(null, [Validators.required]),
    q12e: new FormControl(null, [Validators.required]),
    q12f: new FormControl(null, [Validators.required]),
    q12g: new FormControl(null, [Validators.required]),
    q12h: new FormControl(null, [Validators.required]),

    q13a: new FormControl(null, [Validators.required]),
    q13b: new FormControl(null, [Validators.required]),
    q13c: new FormControl(null, [Validators.required]),
    q13d: new FormControl(null, [Validators.required]),
    q13aExtra: new FormControl(null, [Validators.required]),
    q13bExtra: new FormControl(null, [Validators.required]),
    q13cExtra: new FormControl(null, [Validators.required]),
    q13dExtra: new FormControl(null, [Validators.required]),

    q14a1: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q14a2: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q14a3: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q14a4: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),

    q14b1: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q14b2: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q14b3: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q14b4: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),

    q15a: new FormControl(null, [Validators.required]),
    q15b: new FormControl(null, [Validators.required]),
    q15c: new FormControl(null, [Validators.required]),
    q15d: new FormControl(null, [Validators.required]),
    q15aExtra: new FormControl(null, [Validators.required]),
    q15bExtra: new FormControl(null, [Validators.required]),
    q15cExtra: new FormControl(null, [Validators.required]),
    q15dExtra: new FormControl(null, [Validators.required]),

    q16a1: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q16a2: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q16a3: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q16a4: new FormControl(null),

    q16b1: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q16b2: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q16b3: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),
    q16b4: new FormControl(null, [Validators.required, NO_WHITE_SPACES_ONLY]),

  })

  constructor(
    private modal: NzModalService
  ) {
    this.q10 = this.convertToNzTreeNodeOptions(this.q10Options)
    this.applyValidations()
  }

  convertToNzTreeNodeOptions(inputMap: Map<string, string[]>): NzTreeNodeOptions[] {
    const result: NzTreeNodeOptions[] = [];

    inputMap.forEach((models, brand) => {
      const brandNode: NzTreeNodeOptions = {
        title: brand,
        key: brand,
        selectable: false,
        expanded: true,
        children: models.map(model => ({
          title: model,
          key: `${brand}-${model}`,
          isLeaf: true
        })),
      };

      result.push(brandNode);
    });

    return result;
  };

  ngOnInit() {
  }

  /**
   * Go to next step
   */
  nextStep() {
    const getCars = (formValue: any) => {
      const m: { [p: string]: any } = {}

      if (formValue.q10) {
        formValue.q10!.forEach((eachAttribute: string | null) => {
          if (eachAttribute) {
            const splitString = eachAttribute.split('-')
            if (splitString.length === 2) {
              if (m[splitString[0]]) {
                m[splitString[0]].push(splitString[1])
              } else {
                m[splitString[0]] = [splitString[1]]
              }
            } else {
              m[eachAttribute] = this.q10Options.get(eachAttribute)?.filter(each => each !== 'other')
            }
          }
        })
      }

      return Object.keys(m).map((eachKey: string) => {
        const values = m[eachKey];
        return {
          id: eachKey,
          values
        }
      })
    }
    const formData = this.personalInformationForm.getRawValue();
    if(formData.q1! === 15) {
      this.openSurveyEndModal()
    } else if (formData.q2 === 1 || formData.q2 === 6) {
      this.openSurveyEndModal();
    } else if (formData.q3 === 1 && formData.q4 === 1) {
      this.openSurveyEndModal();
    } else {
      const nextStep =  this.step + 1
      if(nextStep > this.MAX_STEP) {
        const formValue = this.personalInformationForm.value;
        console.log('submit')
        formValue.q10 = getCars(formValue)
        console.log(formValue)
      } else {
        this.step = nextStep > this.MAX_STEP ? this.MAX_STEP : nextStep;
      }
    }

  }

  /**
   * Go to previous step
   */
  prevStep() {
    this.step =  this.step > 1 ? this.step - 1 : 1
  }

  /**
   * Reset form and go to step 1
   */
  goToStep1() {
    this.step = 1
    this.personalInformationForm.reset()
  }

  get personalInformationFormControls() {
    return this.personalInformationForm.controls
  }

  get disableNext() {

    switch (this.step) {
      // case 1: return this.personalInformationFormControls['name'].invalid || false
      case 1: return false
      case 2: return this.personalInformationFormControls['q1'].invalid
      case 3: return this.personalInformationFormControls['q2'].invalid
      case 4: return this.personalInformationFormControls['q3'].invalid
      case 5: return this.personalInformationFormControls['q4'].invalid
      case 6: return this.personalInformationFormControls['q5'].invalid
      case 7: return this.personalInformationFormControls['q6'].invalid
      case 8: return this.personalInformationFormControls['q7'].invalid
      case 9: return this.personalInformationFormControls['q8'].invalid
      case 10: return this.personalInformationFormControls['q9a'].invalid || this.personalInformationFormControls['q9b'].invalid || this.personalInformationFormControls['q9c'].invalid
      case 11: return this.personalInformationFormControls['q10'].invalid
      case 12: return this.personalInformationFormControls['q11'].invalid || this.personalInformationFormControls['q11Extra'].invalid

      case 13: return this.personalInformationFormControls['q12a'].invalid || this.personalInformationFormControls['q12b'].invalid
        || this.personalInformationFormControls['q12c'].invalid || this.personalInformationFormControls['q12d'].invalid
        || this.personalInformationFormControls['q12e'].invalid || this.personalInformationFormControls['q12f'].invalid
        || this.personalInformationFormControls['q12g'].invalid || this.personalInformationFormControls['q12h'].invalid

      case 14: return this.personalInformationFormControls['q13a'].invalid || this.personalInformationFormControls['q13aExtra'].invalid
        || this.personalInformationFormControls['q13b'].invalid || this.personalInformationFormControls['q13bExtra'].invalid
        || this.personalInformationFormControls['q13c'].invalid || this.personalInformationFormControls['q13cExtra'].invalid
        || this.personalInformationFormControls['q13d'].invalid || this.personalInformationFormControls['q13dExtra'].invalid

      case 15: return this.personalInformationFormControls['q14a1'].invalid || this.personalInformationFormControls['q14a2'].invalid
        || this.personalInformationFormControls['q14a3'].invalid || this.personalInformationFormControls['q14a4'].invalid
        || this.personalInformationFormControls['q14b1'].invalid || this.personalInformationFormControls['q14b2'].invalid
        || this.personalInformationFormControls['q14b3'].invalid || this.personalInformationFormControls['q14b4'].invalid

      case 16: return this.personalInformationFormControls['q15a'].invalid || this.personalInformationFormControls['q15aExtra'].invalid
        || this.personalInformationFormControls['q15b'].invalid || this.personalInformationFormControls['q15bExtra'].invalid
        || this.personalInformationFormControls['q15c'].invalid || this.personalInformationFormControls['q15cExtra'].invalid
        || this.personalInformationFormControls['q15d'].invalid || this.personalInformationFormControls['q15dExtra'].invalid

      case 17: return this.personalInformationFormControls['q16a1'].invalid || this.personalInformationFormControls['q16a2'].invalid
        || this.personalInformationFormControls['q16a3'].invalid || this.personalInformationFormControls['q16a4'].invalid
        || this.personalInformationFormControls['q16b1'].invalid || this.personalInformationFormControls['q16b2'].invalid
        || this.personalInformationFormControls['q16b3'].invalid || this.personalInformationFormControls['q16b4'].invalid

      default: return false
    }
  }

  /**
   * Apply Validations
   */
  applyValidations() {

    // Q11
    this.personalInformationFormControls['q11'].valueChanges.subscribe({
      next: (value) => {
        console.log(value)
        if(value === 1) {
          this.personalInformationFormControls['q11Extra'].setValidators([Validators.required, NO_WHITE_SPACES_ONLY])
        } else {
          this.personalInformationFormControls['q11Extra'].setValidators([])
        }
        this.personalInformationFormControls['q11Extra'].setValue('')
        this.personalInformationFormControls['q11Extra'].updateValueAndValidity()
      }
    })


    // Q13 --> Q14
    this.personalInformationFormControls['q13a'].valueChanges.subscribe({
      next: (value) => {
        console.log(value)
        if(value === 6) {
          this.personalInformationFormControls['q14a1'].disable()
          this.personalInformationFormControls['q14b1'].disable()
          this.personalInformationFormControls['q14a1'].setValue(null)
          this.personalInformationFormControls['q14b1'].setValue(null)        }
      }
    })
    this.personalInformationFormControls['q13b'].valueChanges.subscribe({
      next: (value) => {
        if(value === 6) {
          this.personalInformationFormControls['q14a2'].disable()
          this.personalInformationFormControls['q14b2'].disable()
          this.personalInformationFormControls['q14a2'].setValue(null)
          this.personalInformationFormControls['q14b2'].setValue(null)
        }
      }
    })
    this.personalInformationFormControls['q13c'].valueChanges.subscribe({
      next: (value) => {
        if(value === 6) {
          this.personalInformationFormControls['q14a3'].disable()
          this.personalInformationFormControls['q14b3'].disable()
          this.personalInformationFormControls['q14a3'].setValue(null)
          this.personalInformationFormControls['q14b3'].setValue(null)
        }
      }
    })
    this.personalInformationFormControls['q13d'].valueChanges.subscribe({
      next: (value) => {
        if(value === 6) {
          this.personalInformationFormControls['q14a4'].disable()
          this.personalInformationFormControls['q14b4'].disable()
          this.personalInformationFormControls['q14a4'].setValue(null)
          this.personalInformationFormControls['q14b4'].setValue(null)
        }
      }
    })


    // Q15 --> Q16
    this.personalInformationFormControls['q15a'].valueChanges.subscribe({
      next: (value) => {
        console.log(value)
        if(value === 6) {
          this.personalInformationFormControls['q16a1'].disable()
          this.personalInformationFormControls['q16b1'].disable()
          this.personalInformationFormControls['q16a1'].setValue(null)
          this.personalInformationFormControls['q16b1'].setValue(null)
        }
      }
    })
    this.personalInformationFormControls['q15b'].valueChanges.subscribe({
      next: (value) => {
        if(value === 6) {
          this.personalInformationFormControls['q16a2'].disable()
          this.personalInformationFormControls['q16b2'].disable()
          this.personalInformationFormControls['q16a2'].setValue(null)
          this.personalInformationFormControls['q16b2'].setValue(null)
        }
      }
    })
    this.personalInformationFormControls['q15c'].valueChanges.subscribe({
      next: (value) => {
        if(value === 6) {
          this.personalInformationFormControls['q16a3'].disable()
          this.personalInformationFormControls['q16b3'].disable()
          this.personalInformationFormControls['q16a3'].setValue(null)
          this.personalInformationFormControls['q16b3'].setValue(null)
        }
      }
    })
    this.personalInformationFormControls['q15d'].valueChanges.subscribe(
      {
      next: (value) => {
        if(value === 6) {
          this.personalInformationFormControls['q16a4'].disable()
          this.personalInformationFormControls['q16b4'].disable()
          this.personalInformationFormControls['q16a4'].setValue(null)
          this.personalInformationFormControls['q16b4'].setValue(null)
        }
      }
    })
  }

  closeSurveyEndModal() {
    this.goToStep1()
    // this.surveyEndModal = false;
  }

  openSurveyEndModal() {
    this.modal.info({
      nzTitle: 'Thank you for taking part in this survey!',
      nzOkText: 'Close',
      nzOkType: 'primary',
      nzOnOk: () => this.closeSurveyEndModal(),
      nzClosable: false,
    });
  }

}
