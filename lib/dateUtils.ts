import moment from 'moment'
const getRelativeTimeString: (time: string) => string = (time) => moment(new Date(time)).fromNow()

const getFormattedTime: (time: string) => string = (time) =>
  moment(new Date(time)).format('MMM Do, YY')

export { getRelativeTimeString, getFormattedTime }
