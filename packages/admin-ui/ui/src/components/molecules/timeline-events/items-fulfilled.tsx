import React from "react"
import { ItemsFulfilledEvent } from "../../../hooks/use-build-timeline"
import PackageIcon from "../../fundamentals/icons/package-icon"
import EventContainer from "./event-container"
import EventItemContainer from "./event-item-container"
import { useTranslation } from "react-i18next"

type ItemsFulfilledProps = {
  event: ItemsFulfilledEvent
}

const ItemsFulfilled: React.FC<ItemsFulfilledProps> = ({ event }) => {
  const { t } = useTranslation()
  const title =
    event.sourceType === "claim"
      ? t("timeline-replacement-items-fulfilled", "Replacement Items Fulfilled")
      : event.sourceType === "exchange"
      ? t("timeline-exchange-items-fulfilled", "Exchange Items Fulfilled")
      : t("timeline-items-fulfilled", "Items Fulfilled")

  const detail = event.locationName
    ? `${t("ttimeline-shipping-from", "Items Fulfilled")} ${event.locationName}`
    : undefined

  const args = {
    icon: <PackageIcon size={20} />,
    time: event.time,
    title: title,
    children: event.items.map((item, index) => (
      <EventItemContainer item={item} key={index} />
    )),
    noNotification: event.noNotification,
    isFirst: event.first,
    detail,
  }

  return <EventContainer {...args} />
}

export default ItemsFulfilled
