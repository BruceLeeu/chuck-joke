/**
 * A Chuck Norris joke
 * @example An example joke
 * ```json
 * {
 *  "categories": [ "explicit" ],
 *  "created_at": "2020-01-05 13:42:20.568859",
 *  "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
 *  "id": "vyF8HL08TeeqUaTqm-v7xA",
 *  "updated_at": "2020-01-05 13:42:20.568859",
 *  "url": "https://api.chucknorris.io/jokes/vyF8HL08TeeqUaTqm-v7xA",
 *  "value": "Chuck Norris once had sex with a dinosaur and then they became extinct."
 * }
 * ```
 *
 */
export interface Joke {
  categories: Array<string>;
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}
