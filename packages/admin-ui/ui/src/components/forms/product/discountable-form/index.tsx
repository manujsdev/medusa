import { Controller } from "react-hook-form"
import { NestedForm } from "../../../../utils/nested-form"
import Switch from "../../../atoms/switch"
import { useTranslation } from "react-i18next"

export type DiscountableFormType = {
  value: boolean
}

type Props = {
  form: NestedForm<DiscountableFormType>
  isGiftCard?: boolean
}

const DiscountableForm = ({ form, isGiftCard }: Props) => {
  const { t } = useTranslation()
  const { control, path } = form
  return (
    <div>
      <div className="mb-2xsmall flex items-center justify-between">
        <h2 className="inter-base-semibold">
          {t("product-general-section-discountable", "Discountable")}
        </h2>
        <Controller
          control={control}
          name={path("value")}
          render={({ field: { value, onChange } }) => {
            return <Switch checked={value} onCheckedChange={onChange} />
          }}
        />
      </div>
      <p className="inter-base-regular text-grey-50">
        {t(
          "when-unchecked-discounts",
          "When unchecked discounts will not be applied to this"
        )}{" "}
        {isGiftCard
          ? "gift card"
          : t("product-general-section-product", "product").toLowerCase()}
        .
      </p>
    </div>
  )
}

export default DiscountableForm
