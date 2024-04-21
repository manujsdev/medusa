import { useTranslation } from "react-i18next"
import FormValidator from "../../../../../utils/form-validator"
import { NestedForm } from "../../../../../utils/nested-form"
import InputField from "../../../../molecules/input"

export type VariantGeneralFormType = {
  title: string | null
  material: string | null
}

type Props = {
  form: NestedForm<VariantGeneralFormType>
}

const VariantGeneralForm = ({ form }: Props) => {
  const { t } = useTranslation()
  const {
    path,
    register,
    formState: { errors },
  } = form

  return (
    <div>
      <p className="inter-base-regular text-grey-50">
        {t(
          "variants-info",
          "Configure the general information for this variant."
        )}
      </p>
      <div className="pt-large">
        <div className="gap-x-large grid grid-cols-2">
          <InputField
            label={t("variants-custom-title", "Custom title")}
            placeholder="Verde / XL..."
            {...register(path("title"), {
              pattern: FormValidator.whiteSpaceRule("Title"),
            })}
            errors={errors}
          />
          <InputField
            label="Material"
            placeholder="80% lana, 20% algodon..."
            {...form.register(path("material"), {
              pattern: FormValidator.whiteSpaceRule("Material"),
            })}
            errors={errors}
          />
        </div>
      </div>
    </div>
  )
}

export default VariantGeneralForm
