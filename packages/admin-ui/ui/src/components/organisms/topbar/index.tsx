import React, { useCallback, type MouseEvent } from "react"
import useToggleState from "../../../hooks/use-toggle-state"
import { usePolling } from "../../../providers/polling-provider"
import NotificationBell from "../../molecules/notification-bell"
import SearchBar from "../../molecules/search-bar"
import ActivityDrawer from "../activity-drawer"

const Topbar: React.FC = () => {
  const {
    state: activityDrawerState,
    toggle: toggleActivityDrawer,
    close: activityDrawerClose,
  } = useToggleState(false)

  const { batchJobs } = usePolling()

  const onNotificationBellClick = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation()
      toggleActivityDrawer()
    },
    [toggleActivityDrawer]
  )

  return (
    <div className="min-h-topbar max-h-topbar pr-xlarge pl-base bg-grey-0 border-grey-20 flex w-full items-center justify-between border-b">
      <SearchBar />
      <div className="flex items-center">
        <NotificationBell
          onClick={onNotificationBellClick}
          variant={"ghost"}
          hasNotifications={!!batchJobs?.length}
        />
      </div>
      {activityDrawerState && (
        <ActivityDrawer onDismiss={activityDrawerClose} />
      )}
    </div>
  )
}

export default Topbar
