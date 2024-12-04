import { format } from "date-fns"

export function dateFormatter(date: Date): string {
	return format(date, "yyyy-MM-dd")
}
