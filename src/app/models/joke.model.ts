/**
 * A Chuck Norris joke
 * @example An example joke
 * ```json
 * {
 * "categories": ["movie"],
 * "created_at": "2020-01-05 13:42:29.855523",
 * "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
 * "id": "0JqamoTkR_GK0DYbigQ5cw",
 * "updated_at": "2020-01-05 13:42:29.855523",
 * "url": "https://api.chucknorris.io/jokes/0JqamoTkR_GK0DYbigQ5cw",
 * "value": "Arnold Schwarzenegger always says he'll be back. But Chuck Norris always handles things the first time"}
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
