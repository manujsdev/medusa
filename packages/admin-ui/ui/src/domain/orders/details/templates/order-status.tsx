import { useTranslation } from "react-i18next"
import StatusDot from "../../../../components/fundamentals/status-indicator"

export const OrderStatusComponent = ({ order }: any) => {
  const { t } = useTranslation()
  const { status, payment_status, fulfillment_status } = order
  console.log("the ordeeeer: ", order)
  if (
    (payment_status === "captured" && fulfillment_status === "shipped") ||
    status === "completed"
  ) {
    return (
      <StatusDot
        title={t("templates-completed", "Completed")}
        variant="success"
      />
    )
  } else if (status === "pending") {
    return (
      <StatusDot
        title={t("templates-processing", "Processing")}
        variant="default"
      />
    )
  } else if (status === "canceled") {
    return (
      <StatusDot title={t("templates-canceled", "Canceled")} variant="danger" />
    )
  } else if (status === "requires_action") {
    return (
      <StatusDot
        title={t("templates-requires-action", "Requires action")}
        variant="danger"
      />
    )
  } else {
    return null
  }
}
