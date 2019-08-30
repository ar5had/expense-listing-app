import moment from 'moment'
const getRelativeTimeString: (time: string) => string = (time) => {
  return moment(new Date(time)).fromNow()
}
export default getRelativeTimeString
