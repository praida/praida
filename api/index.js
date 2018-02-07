import axios from 'axios'
import qs from 'qs'

const url = (route, query) => {
  return `${process.env.API_URL}/${route}?${qs.stringify(query)}`
}

module.exports = exports = {
  getFields: (dispatch) => {
    dispatch({ type: 'gettingFields', value: true })
    return axios({
      url: url('getFields'),
    })
      .then((fields) => {
        dispatch({ type: 'gotFields', fields })
      }, (error) => {
        dispatch({ type: 'getFieldsFailure', error })
      })
      .then(() => {
        dispatch({ type: 'gettingFields', value: false })
      })
  },

  saveRecord: (dispatch, values) => {
    dispatch({ type: 'savingRecord', value: true, values })
    return axios({
      method: 'post',
      url: url('saveRecord'),
      data: values
    })
      .then(() => {
        dispatch({ type: 'savedRecord' })
      }, (error) => {
        dispatch({ type: 'saveRecordFailed', error })
      })
      .then(() => {
        dispatch({ type: 'savingRecord', value: false })
      })
  }
}
