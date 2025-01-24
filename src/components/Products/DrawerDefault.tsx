import React, { useCallback } from "react";
import Select from "react-select";
import { useAppSelector } from "../../store/hooks";
import { TQuerty } from "../../types";

interface IProps {
  filterValues: {
    materialCategory: string | null;
    category: string | null;
    brand: string | null;
    condition: string | null;
  };
  setFilterValues: React.Dispatch<
    React.SetStateAction<{
      materialCategory: string | null;
      category: string | null;
      brand: string | null;
      condition: string | null;
    }>
  >;
}
interface OptionType {
  label: string;
  value: string;
}

export function DrawerDefault({ filterValues, setFilterValues }: IProps) {
  const { brandRecords, categoryRecords, conditionRecords, materialCategoryRecords } =
    useAppSelector((state) => state?.query);

  const categoryData = (categoryRecords as any)?.data;
  const brandData = (brandRecords as any)?.data;
  const conditionData = (conditionRecords as any)?.data;
  const materialCategoryData = (materialCategoryRecords as any)?.data;

  const valueMaterialCategory = materialCategoryData?.map((item: TQuerty) => ({
    label: item.name,
    value: item.name,
  })) || []

  const valueCategory = categoryData?.map((item: TQuerty) => ({
    label: item.name,
    value: item.name,
  })) || []

  const valueBrand = brandData?.map((item: TQuerty) => ({
    label: item.name,
    value: item.name,
  })) || []

  const valueCondition = conditionData?.map((item: TQuerty) => ({
    label: item.name,
    value: item.name,
  })) || []

  const handleFilterChange = useCallback(
    (field: string, selectedOption: { label: string; value: string } | null) => {
      setFilterValues((prev) => ({
        ...prev,
        [field]: selectedOption ? selectedOption.value : null,
      }));
    },
    [setFilterValues]
  );

  return (
    <React.Fragment>
      <div className="flex flex-col gap-8">
        <div className="w-full flex flex-col gap-2">
          <label className="text-color-text-1 font-medium text-sm">
            Select Category Material
          </label>
          <Select<OptionType>
            classNamePrefix="select"
            value={valueMaterialCategory.find(
              (option :any) => option.value === filterValues.materialCategory
            )}
            onChange={(value) => handleFilterChange("materialCategory", value)}
            options={valueMaterialCategory}
            isClearable
            isSearchable
          />

          <label className="text-color-text-1 font-medium text-sm">
            Select Category
          </label>
          <Select<OptionType>
            classNamePrefix="select"
            value={valueCategory.find(
              (option :any) => option.value === filterValues.category
            )}
            onChange={(value) => handleFilterChange("category", value)}
            options={valueCategory}
            isClearable
            isSearchable
          />

          <label className="text-color-text-1 font-medium text-sm">
            Select Brand
          </label>
          <Select<OptionType>
            classNamePrefix="select"
            value={valueBrand.find(
              (option :any) => option.value === filterValues.brand
            )}
            onChange={(value) => handleFilterChange("brand", value)}
            options={valueBrand}
            isClearable
            isSearchable
          />

          <label className="text-color-text-1 font-medium text-sm">
            Select Condition
          </label>
          <Select<OptionType>
            classNamePrefix="select"
            value={valueCondition.find(
              (option :any) => option.value === filterValues.condition
            )}
            onChange={(value) => handleFilterChange("condition", value)}
            options={valueCondition}
            isClearable
            isSearchable
          />
        </div>
      </div>
    </React.Fragment>
  );
}