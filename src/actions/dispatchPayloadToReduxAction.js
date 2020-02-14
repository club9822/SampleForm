/**
 *
 * @param type
 * @param payload
 * @return {{payload: *, type: *}}
 */
export default function dispatchPayloadToReduxAction({type, payload}) {
  return {type, payload};
}
