
# TypeScript: Enum, Union, এবং Intersection Types

এই ডক্যুমেন্টে আমরা দেখব কিভাবে **TypeScript**-এর তিনটি গুরুত্বপূর্ণ ফিচার—**Enum**, **Union Types**, এবং **Intersection Types**—ব্যবহার করে কোডকে আরও শক্তিশালী, পঠনযোগ্য (readable) এবং ত্রুটিমুক্ত (error-prone) করা যায়।

---

## 1. Enum (Enumeration) এর ব্যবহার

**Enum** হলো একটি ফিচার যা ডেভেলপারকে নির্দিষ্ট কিছু **নামযুক্ত ধ্রুবক (Named Constants)** এর একটি সেট তৈরি করার সুযোগ দেয়। এটি কোডের কঠিন সংখ্যা বা স্ট্রিংগুলোকে সহজে মনে রাখার মতো নামে পরিবর্তন করে দেয়, যা **কোডের পঠনযোগ্যতা** এবং **টাইপ-সেফটি** বৃদ্ধি করে।

### ব্যবহারের সুবিধা

* **পঠনযোগ্যতা (Readability):** `Light.Red` ব্যবহার করা `0` ব্যবহারের চেয়ে অনেক বেশি বোধগম্য।
* **ভুল হওয়ার সম্ভাবনা হ্রাস (Less Error-Prone):** ভুলবশত অন্য কোনো সংখ্যা বা স্ট্রিং ব্যবহার করা এড়ানো যায়।

### নিউমেরিক Enum (Numeric Enum Example)

এটি সবচেয়ে সাধারণ প্রকার। এখানে প্রথম মানটি স্বয়ংক্রিয়ভাবে `0` দিয়ে শুরু হয় এবং ক্রমানুসারে বাড়তে থাকে।

```typescript
enum Light {
    Red,    // মান: 0 (স্বয়ংক্রিয়ভাবে শুরু)
    Yellow, // মান: 1
    Green   // মান: 2
}

let currentLight: Light = Light.Red;
console.log(currentLight);    // আউটপুট: 0
console.log(Light.Green);     // আউটপুট: 2
````

### স্ট্রিং Enum (String Enum Example)

স্ট্রিং মান ব্যবহার করার জন্য এই প্রকারটি ব্যবহৃত হয়। এক্ষেত্রে প্রতিটি ধ্রুবকের জন্য **অবশ্যই** একটি স্ট্রিং মান নির্ধারণ করতে হবে।

```typescript
enum ApiStatus {
    SUCCESS = "Operation_OK",
    FAILED = "Operation_FAIL",
    PENDING = "Operation_WAITING",
}

function checkStatus(status: ApiStatus): void {
    if (status === ApiStatus.SUCCESS) {
        console.log("কাজটি সফলভাবে সম্পন্ন হয়েছে!");
    } else {
        console.log("কাজটি সম্পন্ন হয়নি, বা অপেক্ষায় আছে।");
    }
}

checkStatus(ApiStatus.SUCCESS); // আউটপুট: কাজটি সফলভাবে সম্পন্ন হয়েছে!
// এখানে ApiStatus.SUCCESS এর মান হিসেবে "Operation_OK" ব্যবহৃত হচ্ছে।
```

-----

## 2\. Union এবং Intersection Types

### ১. Union Types (|) - অথবা (OR)

**Union Type** ব্যবহার করে একটি ভ্যালুকে একাধিক সম্ভাব্য টাইপের **যেকোনো একটি** হওয়ার অনুমতি দেওয়া হয়। এটি একটি উল্লম্ব বার (|) ব্যবহার করে সংজ্ঞায়িত করা হয়।

**ধারণা:** এই ভ্যারিয়েবলটি A **অথবা** B **অথবা** C হতে পারে।

**উদাহরণ: ক্যাটারিং সার্ভিসের মেনু**

```typescript
// টাইপ সংজ্ঞায়িত করা: অর্ডারটি "Rice" অথবা "Roti" হতে পারে
type MealOption = "Rice" | "Roti";

function prepareMeal(order: MealOption): void {
    if (order === "Rice") {
        console.log("ভাত রান্না করা হচ্ছে।");
    } else if (order === "Roti") {
        console.log("রুটি তৈরি করা হচ্ছে।");
    }
}

prepareMeal("Rice");
// prepareMeal("Pulao"); // Error: 'Pulao' is not assignable to type 'MealOption'
```

### ২. Intersection Types (&) - এবং (AND)

**Intersection Type** হলো একাধিক টাইপকে একত্রিত করে একটি নতুন টাইপ তৈরি করা। এই নতুন টাইপে একত্রিত **সমস্ত টাইপেরই বৈশিষ্ট্য** থাকতে হবে। এটি অ্যামপারস্যান্ড (&) ব্যবহার করে সংজ্ঞায়িত করা হয়।

**ধারণা:** এই ভ্যারিয়েবলটির মধ্যে A **এবং** B **এবং** C এর সমস্ত বৈশিষ্ট্যই থাকতে হবে।

**উদাহরণ: অ্যাডমিন প্যানেলের চাবি**

```typescript
// আইডি কার্ডের বৈশিষ্ট্য
interface HasIDCard {
    employeeId: number;
    name: string;
}

// কি-কার্ডের বৈশিষ্ট্য
interface HasKeyCard {
    accessLevel: 'L1' | 'L2' | 'L3';
    keySerial: string;
}

// অ্যাডমিনের টাইপ: তাকে HasIDCard এবং HasKeyCard দুটোই হতে হবে
type Admin = HasIDCard & HasKeyCard;

const newAdmin: Admin = {
    employeeId: 101, 
    name: "Rahim", 
    accessLevel: 'L3', // HasKeyCard এর বৈশিষ্ট্য
    keySerial: "XYZ-789" // HasKeyCard এর বৈশিষ্ট্য
};

// const incompleteAdmin: Admin = { name: "Karim", employeeId: 102 }; 
// Error: 'accessLevel' এবং 'keySerial' নেই






