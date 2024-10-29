import { EStatuses } from './Task.types';

class TaskUtils {
    public static chooseStatus(
        status: EStatuses,
        date: string,
        time: string | undefined,
      ) {
        if (status === EStatuses.Complete) {
          if (this.compareDates(date, time)) {
            return EStatuses.Deadline;
          } else {
            return EStatuses.InProgress;
          }
        }
        return EStatuses.Complete;
      }
    
      public static compareDates(date: string, time: string | undefined) {
        const todayDate = new Date();
        const currentDate = new Date(date);
        if (time !== undefined) {
          const [hours, min] = time.split(':');
          currentDate.setHours(parseInt(hours), parseInt(min));
        } else {
          todayDate.setHours(0, 0, 0, 0);
        }
        return todayDate >= currentDate;
      }
}

export default TaskUtils;