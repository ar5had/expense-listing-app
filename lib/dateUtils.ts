import moment from 'moment'
const getRelativeTimeString: (time: string, locale: string) => string = (time, locale) =>
  moment(new Date(time))
    .locale(locale || 'en')
    .fromNow()

const getFormattedTime: (time: string, locale: string) => string = (time, locale) =>
  moment(new Date(time))
    .locale(locale || 'en')
    .format('MMM Do, YY')

export { getRelativeTimeString, getFormattedTime }
