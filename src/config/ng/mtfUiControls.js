import { AdminBoundaries } from '../../icons'

export const nigeriaMtfUiControls = [
  {
    id: 'admin',
    label: 'Module 1 – Household Energy Access',
    icon: AdminBoundaries,
    description: '',
    info: 'Administritative boundaries from the Government of Kenya.',
    controls: [
      {
        id: 'energy_access_summary',
        label: 'Energy Access Summary',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Primary_Source_of_Electricity_by_Tier',
            label: 'Primary Source of Electricity by Tier',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Primary_Source_of_Cooking_Fuel_by_Agg_Cooking_Tier',
            label: 'Primary Source of Cooking Fuel by Aggregate Cooking Tier',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Primary_Source_of_Household_Lighting',
            label: 'Primary Source of Household Lighting',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },

      {
        id: 'stopgap_household_detail',
        label: 'Stopgap Household Detail',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Primary_Source_of_Backup_Lighting',
            label: 'Primary Source of Backup Lighting',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Kerosene_Usage_per_Week',
            label: 'Kerosene Usage per Week',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
      },
      {
        id: 'grid_hh_detail',
        label: 'Grid Household Detail',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Grid_Electricity_Access_by_Tier',
            label: 'Grid Electricity Access by Tier',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
      },
      {
        id: 'cooking_fuel_detail',
        label: 'Cooking Fuel Detail',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Primary_vs_Secondary_Fuel_Types',
            label: 'Primary vs Secondary Fuel Types',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },

          {
            id: 'Primary_Cooking_Fuel_vs_Primary_Cookstove',
            label: 'Primary Cooking Fuel vs Primary Cookstove',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },

          {
            id: 'Primary_Stove_Type',
            label: 'Primary Stove Type',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Primary_Source_of_Cooking_Fuel',
            label: 'Primary Source of Cooking Fuel',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'LPG_Usage_per_Week',
            label: 'LPG Usage per Week',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },
    ],
  },
  {
    id: 'admin',
    label: 'Module 2 – Consumption & Economics',
    icon: AdminBoundaries,
    description: '',
    info: 'Administritative boundaries from the Government of Kenya.',
    controls: [
      {
        id: 'lighting_existing_expenditures',
        label: 'Existing expenditures on energy for lighting & appliances',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Days_Used_Lamp_or_Candle_per_Month',
            label: 'Days Used Lamp or Candle per Month',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Monthly_Expenditure_on_Dry_Cell_Batteries',
            label: 'Monthly Expenditure on Dry Cell Batteries',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Hours_Used_Lamp_or_Candle_per_Day',
            label: 'Hours Used Lamp or Candle per Day',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Weekly_Expenditure_on_Lamps_or_Candles',
            label: 'Weekly Expenditure on Lamps or Candles',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Willingness_to_Pay_over_12_months_for_Solar_Device',
            label: 'Willingness to Pay over 12 months for Solar Device',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Willingness_to_Pay_over_12_months_for_Electricity',
            label: 'Willingness to Pay over 12 months for Electricity',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },
      {
        id: 'cooking_existing_expenditures',
        label: 'Existing expenditures on energy for cooking',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Amount_Spent_on_Fuel_for_Stoves',
            label: 'Amount Spent on Fuel for Stoves',
            defaultVisibility: false,
            legend: 'none',
            info: '',
            link:
              'https://raw.githubusercontent.com/JosephSemrai/mtf-graph-test/main/Amount_Spent_on_Fuel_for_Stoves.js',
          },
          {
            id: 'Amount_Paid_For_Cookstoves',
            label: 'Amount Paid for Cookstoves',
            defaultVisibility: false,
            legend: 'none',
            info: '',
            link:
              'https://raw.githubusercontent.com/JosephSemrai/mtf-graph-test/main/Amount_Paid_For_Cookstoves.js',
          },
          {
            id: 'Willingness_to_Pay_over_12_months_for_a_Fuelwood_Cookstove',
            label: 'Willingness to Pay over 12 months for a Fuelwood Cookstove',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },
      {
        id: 'section_l_part_1',
        label: 'Consumption / expenditure on other goods & services',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Amount_Spent_on_Mobile_Phone_Top_up_per_Month',
            label: 'Amount Spent on Mobile Phone Top up per Month',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Amount_Spent_on_House_Rent_per_Month',
            label: 'Amount Spent on House Rent per Month',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expected_Monthly_Expenditure_on_Electricity',
            label: 'Expected Monthly Expenditure on Electricity',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },

          {
            id: 'Expenditure_on_Cereal_and_Cereal_Products_per_Week',
            label: 'Expenditure on Cereal and Cereal Products per Week',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Pulses_and_Nuts_per_Week',
            label: 'Expenditure on Pulses and Nuts per Week',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Milk_and_Milk_Products_per_Week',
            label: 'Expenditure on Milk and Milk Products per Week',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Vegetables_per_Week',
            label: 'Expenditure on Vegetables per Week',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Eggs_Meat_and_Poultry_per_Week',
            label: 'Expenditure on Eggs Meat and Poultry per Week',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Sugar_per_Week',
            label: 'Expenditure on Sugar per Week',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Other_Food_Items_per_Week',
            label: 'Expenditure on Other Food Items per Week',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Beverages_per_Week',
            label: 'Expenditure on Beverages per Week',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Alcohol_Tobacco_and_Cigarettes_per_Week',
            label: 'Expenditure on Alcohol Tobacco and Cigarettes per Week',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Medical_Expenses_per_Month',
            label: 'Expenditure on Medical Expenses per Month',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Transportation_per_Month',
            label: 'Expenditure on Transportation per Month',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Internet_and_Household_Communication_per_Month',
            label:
              'Expenditure on Internet and Household Communication per Month',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Soaps_Disinfectants_per_Month',
            label: 'Expenditure on Soaps Disinfectants per Month',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Water_Supply_per_Month',
            label: 'Expenditure on Water Supply per Month',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_School_Fees_and_Educational_Expenses_per_Year',
            label:
              'Expenditure on School Fees and Educational Expenses per Year',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Expenditure_on_Clothing_Shoes_and_Accessories_per_Year',
            label: 'Expenditure on Clothing Shoes and Accessories per Year',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
        info: '',
      },
    ],
  },
  {
    id: 'admin',
    label: 'Module 3 – Financial Inclusion & ICT',
    icon: AdminBoundaries,
    description: '',
    info: 'Administritative boundaries from the Government of Kenya.',
    controls: [
      {
        id: 'Number_of_Phones_the_Household_Owns',
        label: 'Number of Phones the Household Owns',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
      {
        id: 'Mobile_Money_Accounts',
        label: 'Mobile Money Accounts',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
      {
        id: 'Mobile_Money_Payments',
        label: 'Mobile Money Payments',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
      {
        id: 'Mobile_Account_Activity',
        label: 'Mobile Account Activity',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
      {
        id: 'Mobile_Money_Service_Usage',
        label: 'Mobile Money Service Usage',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
      {
        id: 'Electricity_Bill_Payments',
        label: 'Electricity Bill Payments',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
      {
        id: 'Formal_Bank_Accounts',
        label: 'Formal Bank Accounts',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
      {
        id: 'Types_of_Financial_Institutions',
        label: 'Types of Financial Institutions',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
      {
        id: 'Sources_of_Loans_and_Credit',
        label: 'Sources of Loans and Credit',
        defaultVisibility: false,
        legend: 'none',
        info: '',
      },
    ],
  },
  {
    id: 'admin',
    label: 'Module 4 – Household Characteristics & Assets',
    icon: AdminBoundaries,
    description: '',
    info: 'Administritative boundaries from the Government of Kenya.',
    controls: [
      {
        id: 'dwelling_detail',
        label: 'Household Dwelling Detail',
        defaultVisibility: false,
        legend: 'none',
        subcontrols: [
          {
            id: 'Number_of_Rooms_the_Household_Occupies',
            label: 'Number of Rooms the Household Occupies',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Wall_Dwelling_Materials',
            label: 'Wall Dwelling Materials',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Floor_vs_Wall_Dwelling_Material',
            label: 'Floor vs Wall Dwelling Material',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Household_Water_Quality',
            label: 'Household Water Quality',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
          {
            id: 'Total_Land_Size',
            label: 'Total Land Size',
            defaultVisibility: false,
            legend: 'none',
            info: '',
          },
        ],
      },
    ],
  },
]
