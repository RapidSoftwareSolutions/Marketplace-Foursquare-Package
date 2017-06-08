[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Foursquare/functions?utm_source=RapidAPIGitHub_FoursquareFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Foursquare Package
Add Foursquare venue and user information to your app.
* Domain: foursquare.com
* Credentials: clientId, clientSecret

## How to get credentials: 

Navigate to our [OAuth Generator](https://rapidoauth.com/foursquare) and follow the instructions there.

OR

Follow these steps:

1. Create a new [Foursquare Application](https://foursquare.com/developers/register)
2. Copy and save your clientId, clientSecret, redirectUrl
3. Direct user to foursquare.com/oauth2/authenticate?client_id=`clientId`&response_type=code&redirect_uri=`redirectUrl`
4. If the user accepts, they will be redirected back to http://YOUR_REGISTERED_REDIRECT_URI/?code=`code`
5. Use getAccessToken method to get users's `accessToken`.

## Custom datatypes:
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]```
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```

## Foursquare.getAccessToken
Access tokens allow apps to make requests to Foursquare on the behalf of a user. Each access token is unique to the user and consumer key.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| code        | String     | The authorization code.
| redirectUri | String     | Application redirect url.

## Foursquare.getUser
Returns profile information for a given user, including selected mayorships.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| userId         | String| Identity of the user to get details for. Pass `self` to get details of the acting user.

## Foursquare.getPendingFriendRequests
Shows a user the list of users with whom they have a pending friend request (i.e., someone tried to add the acting user as a friend, but the acting user has not accepted).

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.

## Foursquare.findUsers
Helps a user locate friends.

| Field          | Type   | Description
|----------------|--------|----------
| accessToken    | String | Access Token obtained from Foursquare OAuth.
| phone          | String | A comma-delimited list of phone numbers to look for.
| email          | String | A comma-delimited list of email addresses to look for.
| twitter        | String | A comma-delimited list of Twitter handles to look for.
| twitterSource  | String | A single Twitter handle. Results will be users that this handle follows on Twitter who use Foursquare.
| facebookIds    | String | A comma-delimited list of Facebook ID's to look for.
| name           | String | A single string to search for in users' names.
| onlyPages      | Boolean| (default false) Indicates whether to only return pages. This replaces the functionality of the old dedicated pages/search endpoint.

## Foursquare.getUserVisitedVenues
Returns a list of all venues visited by the specified user, along with how many visits and when they were last there.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| userId         | String| For now, only `self` is supported.
| beforeTimestamp| Number| Seconds since epoch.
| afterTimestamp | Number| Seconds after epoch.
| categoryId     | String| Limits returned venues to those in this category. If specifying a top-level category, all sub-categories will also match the query.

## Foursquare.getUserPhotos
Returns photos from a user.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| userId         | String| User ID to retrieve photos for.
| limit          | Number| Number of results to return, up to 500.
| offset         | Number| Used to page through results.

## Foursquare.getUserCheckins
Returns a history of checkins for the authenticated user. 

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| userId         | String| For now, only `self` is supported
| limit          | Number| Number of results to return, up to 250.
| offset         | Number| The number of results to skip. Used to page through results.
| sort           | Select| How to sort the returned checkins. Can be `newestfirst` or `oldestfirst`.
| afterTimestamp | Number| Retrieve the first results to follow these seconds since epoch. This should be useful for paging forward in time, or when polling for changes. To avoid missing results when polling, we recommend subtracting several seconds from the last poll time and then de-duplicating.
| beforeTimestamp| Number| Retrieve the first results prior to these seconds since epoch. Useful for paging backward in time.

## Foursquare.getUserLikedVenues
Returns a list of venues liked by the specified user

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| userId         | String| User ID or `self`
| beforeTimestamp| String| Seconds since epoch.
| afterTimestamp | String| Seconds after epoch.
| categoryId     | String| Limits returned venues to those in this category. If specifying a top-level category, all sub-categories will also match the query.
| limit          | Number| Number of results to return.
| offset         | Number| Used to page through results.

## Foursquare.getUserMayorships
Returns a user's mayorships.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| userId         | String| Identity of the user to get mayorships for. Pass `self` to get friends of the acting user.

## Foursquare.getUserLists
A User's Lists.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| userId         | String| Identity of the user to get lists for. Pass `self` to get lists of the acting user.
| group          | Select| Can be `created` (lists created by this user), `edited` (other people's lists this user has edited), `followed` (lists this user follows), `friends` (lists from this user's friends), and `suggested` (lists relevant to the user's current location).
| location       | Map| Location of the user, required in order to receive the suggested group. Format: `lat,lng`. Example: `40.7,-74`
| limit          | Number| Number of results to return, up to 200.
| offset         | String| The number of results to skip. Used to page through results.

## Foursquare.updateUserPhoto
Updates the user's profile photo.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| photo          | File  | Photo under `100KB` in multipart MIME encoding with content type `image/jpeg`, `image/gif`, or `image/png`.

## Foursquare.getUserFriends
Returns an array of a user's friends.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| userId         | String| Identity of the user to get friends of. Pass `self` to get friends of the acting user.
| limit          | Number| Number of results to return, up to 500.
| offset         | Number| Used to page through results.

## Foursquare.getSingleVenue
Gives details about a venue, including location, mayorship, tags, tips, specials, and category. 

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| venueId        | String| ID of venue to retrieve

## Foursquare.searchVenues
Returns a list of venues near the current location, optionally matching a search term. 

| Field           | Type       | Description
|-----------------|------------|----------
| clientId        | credentials| Application client id.
| clientSecret    | credentials| Application client secret key.
| location        | Map     | Required unless near is provided: Latitude and longitude of the user's location. Format: `lat,lng`. Example: `40.7,-74`
| near            | String     | Required unless location is provided:  A string naming a place in the world. If the near string is not geocodable, returns a failed_geocode error. Otherwise, searches within the bounds of the geocode. Adds a geocode object to the response. (Required for query searches)
| locationAccuracy| Float      | Accuracy of latitude and longitude, in meters. (Does not currently affect search results.)
| altitude        | Number     | Altitude of the user's location, in meters. (Does not currently affect search results.)
| altitudeAccuracy| Float      | Accuracy of the user's altitude, in meters. (Does not currently affect search results.)
| query           | String     | A search term to be applied against venue names.
| limit           | String     | Number of results to return, up to 50.
| intent          | String     | One of the values below, indicating your intent in performing the search. If no value is specified, defaults to `checkin`. See README for more info.
| radius          | Number     | Limit results to venues within this many meters of the specified location. Defaults to a city-wide area. Only valid for requests with intent=browse, or requests with intent=checkin and categoryId or query. Does not apply to match intent requests. The maximum supported radius is currently 100,000 meters.
| southWest       | String     | Example: `44.3,37.2`. With northEast, limits results to the bounding quadrangle defined by the latitude and longitude given by sw as its south-west corner, and ne as its north-east corner. The bounding quadrangle is only supported for intent=browse searches. Not valid with ll or radius. Bounding quadrangles with an area up to approximately 10,000 square kilometers are supported.
| northEast       | String     | See `southWest`.
| categoryId      | String     | A comma separated list of categories to limit results to. If you specify categoryId specifying a radius may improve results. If specifying a top-level category, all sub-categories will also match the query. Does not apply to match intent requests.
| url             | String     | A third-party URL which we will attempt to match against our map of venues to URLs.
| providerId      | String     | Identifier for a known third party that is part of our map of venues to URLs, used in conjunction with `linkedId`.
| linkedId        | String     | 1002207971611 Identifier used by third party specified in `providerId`, which we will attempt to match against our map of venues to URLs.

## Foursquare.getSuggestedCompletion
Returns a list of mini-venues partially matching the search term, near the location.

| Field           | Type       | Description
|-----------------|------------|----------
| clientId        | credentials| Application client id.
| clientSecret    | credentials| Application client secret key.
| query           | String     | A search term to be applied against titles. Must be at least 3 characters long.
| location        | Map     | Required unless near is provided: Latitude and longitude of the user's location. Format: `lat,lng`. Example: `40.7,-74`
| near            | String     | Required unless location is provided:  A string naming a place in the world. If the near string is not geocodable, returns a failed_geocode error. Otherwise, searches within the bounds of the geocode. Adds a geocode object to the response. (Required for query searches)
| locationAccuracy| Float      | Accuracy of latitude and longitude, in meters. (Does not currently affect search results.)
| limit           | String     | Number of results to return, up to 100.
| radius          | String     | Limit results to venues within this many meters of the specified location. Defaults to a city-wide area. The maximum supported radius is currently 80,000 meters.
| southWest       | String     | Example: `44.3,37.2`. With northEast, limits results to the bounding quadrangle defined by the latitude and longitude given by sw as its south-west corner, and ne as its north-east corner. The bounding quadrangle is only supported for intent=browse searches. Not valid with ll or radius. Bounding quadrangles with an area up to approximately 10,000 square kilometers are supported.
| northEast       | String     | See `southWest`.

## Foursquare.getVenueCategories
Returns a hierarchical list of categories applied to venues.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.

## Foursquare.getTrendingVenues
Returns a list of venues near the current location with the most people currently checked in. 

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| location    | Map     | Location of the user. Format: `lat,lng`. Example: `40.7,-74`
| limit       | Number     | Number of results to return, up to 50.
| radius      | String     | Radius in meters, up to approximately 2000 meters.

## Foursquare.getRecommendedVenues
Returns a list of recommended venues near the current location.

| Field           | Type       | Description
|-----------------|------------|----------
| clientId        | credentials| Application client id.
| clientSecret    | credentials| Application client secret key.
| location        | Map     | Required unless near is provided: Latitude and longitude of the user's location. Format: `lat,lng`. Example: `40.7,-74`
| near            | String     | Required unless location is provided:  A string naming a place in the world. If the near string is not geocodable, returns a failed_geocode error. Otherwise, searches within the bounds of the geocode. Adds a geocode object to the response. (Required for query searches)
| locationAccuracy| Float      | Accuracy of latitude and longitude, in meters. (Does not currently affect search results.)
| altitude        | Number     | Altitude of the user's location, in meters. (Does not currently affect search results.)
| altitudeAccuracy| Float      | Accuracy of the user's altitude, in meters. (Does not currently affect search results.)
| query           | String     | A search term to be applied against venue names.
| radius          | Number     | Radius to search within, in meters. If radius is not specified, a suggested radius will be used based on the density of venues in the area.
| section         | Select     | One of `food`, `drinks`, `coffee`, `shops`, `arts`, `outdoors`, `sights`, `trending` or `specials`, `nextVenues` (venues frequently visited after a given venue), or topPicks (a mix of recommendations generated without a query from the user). Choosing one of these limits results to venues with the specified category or property.
| limit           | Number     | Number of results to return, up to 50.
| offset          | String     | Used to page through results.
| novelty         | Select     | Pass `new `or `old` to limit results to places the acting user hasn't been or has been, respectively. Omitting this parameter returns a mixture of old and new venues.
| friendVisits    | Select     | Pass `visited` or `notvisited` to limit results to places the acting user's friends have or haven't been, respectively. Omitting this parameter returns a mixture of venues to which the user's friends have or haven't been.
| time            | String     | Pass `any` to retrieve results for any time of day. Omitting this parameter returns results targeted to the current time of day.
| day             | String     | Pass `any` to retrieve results for any day of the week. Omitting this parameter returns results targeted to the current day of the week.
| venuePhotos     | Number     | Boolean flag to include a photo in the response for each venue, if one is available. Default is `0` (no photos). Photos are returned as part of the venue JSON object.
| lastVenue       | String     | A venue ID to use in combination with the intent=nextVenues parameter, which returns venues users often visit after a given venue. If intent=nextVenues is specified but lastVenue is not, the user's last check-in will be used if it is within 2 hours. If the user has not checked in within the last 2 hours, no results will be returned.
| openNow         | Boolean    | Boolean flag to only include venues that are open now. This prefers official provider hours but falls back to popular check-in hours.
| sortByDistance  | Boolean    | Boolean flag to sort the results by distance instead of relevance. Example: `1`
| price           | String     | Comma separated list of price points. Currently the valid range of price points are [1,2,3,4], 1 being the least expensive, 4 being the most expensive. For food venues, in the United States, 1 is < $10 an entree, 2 is $10-$20 an entree, 3 is $20-$30 an entree, 4 is > $30 an entree.
| saved           | Boolean    | Boolean flag to only include venues that the user has saved on their To-Do list or to another list.
| specials        | Boolean    | Boolean flag to only include venues that have a special.

## Foursquare.addVenue
Allows Foursquare users to add a new venue. 

| Field              | Type   | Description
|--------------------|--------|----------
| accessToken        | String | Access Token obtained from Foursquare OAuth.
| name               | String | the name of the venue
| address            | String | The address of the venue.
| crossStreet        | String | The nearest intersecting street or streets.
| city               | String | The city name where this venue is.
| state              | String | The nearest state or province to the venue.
| zip                | String | The zip or postal code for the venue.
| phone              | String | The phone number of the venue.
| twitter            | String | The twitter handle of the venue.
| location           | Map | Latitude and longitude of the venue, as accurate as is known. Format: `lat,lng`. Example: `40.7,-74`
| primaryCategoryId  | String | The ID of the category to which you want to assign this venue.
| description        | String | A freeform description of the venue, up to 160 characters.
| url                | String | The url of the homepage of the venue.
| ignoreDuplicates   | Boolean| A boolean flag telling the server to ignore duplicates and force the addition of this venue.
| ignoreDuplicatesKey| String | Required if ignoreDuplicates is true. This key will be available in the response of the HTTP 409 error of the first (failed) attempt to add venue.

## Foursquare.getUserManagedVenues
Get a list of venues the current user manages.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| limit          | Number| Number of managed venues to return. Defaults to 100, maximum is 1000.
| offset         | Number| Number of venues to skip over for paging. Defaults to 0.

## Foursquare.getSimilarVenues
Returns a list of venues similar to the specified venue.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| venueId        | String| The venue you want similar venues for.

## Foursquare.getVenuePhotos
Returns photos for a venue.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| venueId     | String     | The venue id for which photos are being requested.
| group       | String     | If not specified, public venue photos are returned ordered by relevance. Pass venue for public venue photos, ordered by recency. Pass checkin for venue photos from friends (including non-public photos from recent checkins), ordered by recency. See our documentation on photos for information on how to handle the response and construct actual photo URLs.
| limit       | Number     | Number of results to return, up to 200.
| offset      | Number     | Used to page through results.

## Foursquare.getVenueEvents
Allows you to access information about the current events at a place. 

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| venueId     | String     | The venue id for which events are being requested.

## Foursquare.getUsersWhoLikedVenue
Returns friends and a total count of users who have liked this venue.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| venueId     | String     | The ID of the venue to get likes for.

## Foursquare.getNextVenues
Returns venues that people often check in to after the current venue. Up to 5 venues are returned in each query, and results are sorted by how many people have visited that venue after the current one. Homes are never returned in results.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| venueId     | String     | ID of the venue you want to see next venue information about

## Foursquare.getVenueHours
Returns hours for a venue. 

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| venueId     | String     | The venue id for which hours are being requested.

## Foursquare.getVenueLinks
Returns URLs or identifiers from third parties that have been applied to this venue, such as how the New York Times refers to this venue and a URL for additional information from nytimes.com. This is part of the foursquare Venue Map.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| venueId     | String     | The venue you want annotations for.

## Foursquare.getVenueMenu
Returns menu information for a venue. 

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| venueId     | String     | The venue id for which menu is being requested.

## Foursquare.getVenueTips
Returns tips for a venue.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| venueId     | String     | The venue you want tips for.
| sort        | Select     | One of `friends`, `recent`, or `popular`.
| limit       | String     | Number of results to return, up to 500.
| offset      | String     | Used to page through results.

## Foursquare.getVenuePeopleCount
Provides a count of how many people are at a given venue. 

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| venueId        | String| ID of venue to retrieve
| limit          | Number| Number of results to return, up to 500.
| offset         | Number| Used to page through results.

## Foursquare.claimVenue
Claim a venue for the user. If your OAuth Consumer is set up with the proper privileges, you can use this endpoint to claim a venue on behalf of a user without the claim having to be approved by foursquare staff.

| Field          | Type   | Description
|----------------|--------|----------
| accessToken    | String | Access Token obtained from Foursquare OAuth.
| visible        | Boolean| (optional, default `true`) whether role as manager is visible on the venue page

## Foursquare.dislikeVenue
Allows the acting user to dislike for a venue.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| venueId        | String| The venue to dislike for

## Foursquare.undoDislikeVenue
Allows the acting user to undo a previous dislike for a venue.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| venueId        | String| The venue to undo a dislike for

## Foursquare.flagVenue
Allows users to indicate a venue is incorrect in some way. 

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| venueId        | String| The venue id for which an edit is being proposed.
| problem        | Select| One of `mislocated`, `closed`, `duplicate`, `inappropriate`, `doesnt_exist`, `event_over`
| dublicatedVenue| String| ID of the duplicated venue (for problem `duplicate`)

## Foursquare.proposeVenueChange
If the user knows the correct venue information, use this method to save it. Otherwise, use flag to flag the venue instead (you need not specify new venue info in that case).

| Field            | Type  | Description
|------------------|-------|----------
| accessToken      | String| Access Token obtained from Foursquare OAuth.
| venueId          | String| The venue id for which an edit is being proposed.
| name             | String| The name of the venue.
| address          | String| The address of the venue.
| crossStreet      | String| The nearest intersecting street or streets.
| city             | String| The city name where this venue is.
| state            | String| The nearest state or province to the venue.
| zip              | String| The zip or postal code for the venue.
| phone            | String| The phone number of the venue.
| twitter          | String| The twitter handle of the venue.
| description      | String| A freeform description of the venue, up to 300 characters.
| url              | String| The url of the homepage of the venue.
| menuUrl          | String| A url where the menu of the venue can be found.
| facebookUrl      | String| The url for this venue's Facebook Page.
| venueLocation    | Map| Latitude and longitude at which the venue should be located. Example: `44.3,37.2`
| primaryCategoryId| String| The ID of the category to which you want to assign this venue.
| addCategoryIds   | String| Comma-separated list of new category IDs to be assigned to this venue. If you are adding a new category to a venue and you want to make it primary, you should just use primaryCategoryId.
| removeCategoryIds| String| Comma-separated list of new category IDs to be removed from this venue.
| hours            | String| The hours for the venue, as a semi-colon separated list of open segments and named segments (e.g., brunch or happy hour). Open segments are formatted as day,start,end. Named segments additionally have a label, formatted as day,start,end,label. Days are formatted as integers with Monday = 1,...,Sunday = 7. Start and End are formatted as [+]HHMM format. Use 24 hour format (no colon), prefix with 0 for HH or MM less than 10. Use '+' prefix, i.e., +0230 to represent 2:30 am past midnight into the following day.

## Foursquare.likeVenue
Allows the acting user to like a venue.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| venueId        | String| The venue to like

## Foursquare.unlikeVenue
Allows the acting user to unlike a venue.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| venueId        | String| The venue to unlike

## Foursquare.getVenueGroups
List all venue groups owned by the user.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.

## Foursquare.getCheckin
Get details of a check-in.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| checkinId      | String| The ID of the check-in to retrieve additional information for.

## Foursquare.resolvePublicCheckinFromUrl
Check-ins that are posted to public feeds such as Twitter do not reveal the associated check-in's ID. Use this endpoint to map from a check-in URL (e.g., https://www.swarmapp.com/c/fcP5m3yn7AL) to check-in details.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| shortId        | String| The short ID at the end of a swarmapp.com link, e.g., https://swarmapp.com/c/abc123ZYX

## Foursquare.getRecentFriendsCheckins
Returns a list of recent checkins from friends.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| location       | Map| Latitude and longitude of the user's location, so response can include distance. Format: `lat,lng`. Example: `40.7,-74`
| limit          | Number| Number of results to return, up to 100.
| afterTimestamp | Number| Seconds after which to look for checkins, e.g. for looking for new checkins since the last fetch. If more than limit results are new since then, this is ignored. Checkins created prior to this timestamp will still be returned if they have new comments or photos, making it easier to poll for all new activity.

## Foursquare.createCheckin
Allows you to check in to a place.

| Field           | Type  | Description
|-----------------|-------|----------
| accessToken     | String| Access Token obtained from Foursquare OAuth.
| venueId         | String| The venue where the user is checking in. Find venue IDs by searching or from historical APIs.
| eventId         | String| The event the user is checking in to.
| shout           | String| A message about your check-in. The maximum length of this field is 140 characters.
| mentions        | Select| Mentions in your check-in. This parameter is a semicolon-delimited list of mentions. A single mention is of the form `start,end,userid`, where start is the index of the first character in the shout representing the mention, end is the index of the first character in the shout after the mention, and userid is the userid of the user being mentioned. If userid is prefixed with 'fbu-', this indicates a Facebook userid that is being mention. Character indices in shouts are 0-based.
| broadcast       | Select| Who to broadcast this check-in to. Accepts a comma-delimited list of values: `private`, `public`, `facebook`, `twitter`, `followers`
| location        | Map| Latitude and longitude of the user's location. Only specify this field if you have a GPS or other device reported location for the user at the time of check-in. Format: `lat,lng`. Example: `40.7,-74`
| locationAccuracy| Float | Accuracy of latitude and longitude, in meters.
| altitude        | Number| Altitude of the user's location, in meters.
| altitudeAccuracy| Float | Accuracy of the user's altitude, in meters.

## Foursquare.getUsersWhoLikedCheckin
Returns friends and a total count of users who have liked this checkin.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| checkinId   | String     | The ID of the checkin to get likes for.

## Foursquare.removeCommentFromCheckin
Remove a comment from a checkin, if the acting user is the author or the owner of the checkin.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| checkinId      | String| The ID of the checkin to remove a comment from.
| commentId      | String| The id of the comment to remove.

## Foursquare.likeCheckin
Allows the acting user to like a checkin.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| checkinId      | String| Checking id to like

## Foursquare.unlikeCheckin
Allows the acting user to unlike a checkin.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| checkinId      | String| Checking id to unlike

## Foursquare.addPostToCheckin
Post user generated content from an external app to a check-in. This post will be accessible to anyone who can view the details of the check-in. 

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| checkinId      | String| The ID of the checkin to add a post to.
| text           | String| The text of the post, up to 200 characters.
| url            | String| Link for more details. This page will be opened in an embedded web view in the foursquare application, unless contentId is specified and a native link handler is registered and present. We support the following URL schemes: http, https, foursquare, mailto, tel, and sms.
| contentId      | String| Identifier for the post to be used in a native link, up to 50 characters. A url must also be specified in the request.

## Foursquare.addCommentToCheckin
Comment on a checkin-in

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| checkinId      | String| The ID of the checkin to add a comment to.
| text           | String| The text of the comment, up to 200 characters.
| mentions       | String| Mentions in your check-in. This parameter is a semicolon-delimited list of mentions. A single mention is of the form `start,end,userid`, where start is the index of the first character in the shout representing the mention, end is the index of the first character in the shout after the mention, and userid is the userid of the user being mentioned. Character indices in shouts are 0-based.

## Foursquare.getTip
Gives details about a tip, including which users (especially friends) have marked the tip to-do.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| tipId          | String| ID of tip to retrieve

## Foursquare.addTip
Allows you to add a new tip at a venue.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| venueId        | String| The venue where you want to add this tip.
| text           | String| The text of the tip, up to 200 characters.
| url            | String| A URL related to this tip.
| broadcast      | String| Whether to broadcast this tip. Send twitter if you want to send to twitter, facebook if you want to send to facebook, or twitter,facebook if you want to send to both.

## Foursquare.getUsersWhoLikedTip
Returns friends and a total count of users who have liked this tip.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| tipId       | String     | The ID of the tip to get likes for.

## Foursquare.getUsersSavedTip
Returns friends and a total count of users who have saved this tip.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| tipId       | String     | The ID of the tip to get saves for.

## Foursquare.getListsTipAppears
The lists that this tip appears on.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| tipId       | String     | Identity of a tip to get lists for.
| group       | Select     | can be `created`, `edited`, `followed`, `friends`, `other`. If no acting user is present, only other is supported.

## Foursquare.removeTipFromToDoList
Allows you to remove a tip from your to-do list.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| tipId          | String| The tip you want to unmark.

## Foursquare.flagTip
Allows the acting user to flag a tip as offensive, spam, or not relevant.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| tipId          | String| The tip to flag.
| comment        | String| A comment explaining the flag.
| problem        | Select| The specific problem with the tip. Must be one of `offensive`, `spam`, or `nolongerrelevant`.

## Foursquare.likeTip
Allows the acting user to like a tip.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| tipId          | String| The tip to like.

## Foursquare.unlikeTip
Allows the acting user to like a tip.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| tipId          | String| The tip to unlike.

## Foursquare.getSingleList
Gives details about a list. 

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| Id for a user-created (e.g. /v2/lists/12381902N) or followed list or one of either USER_ID/tips (e.g. /v2/lists/32/tips) or USER_ID/todos.
| limit          | String| Number of results to return, up to 200.
| offset         | String| The number of results to skip. Used to page through results.
| locationBounds | String| The number of results to skip. Used to page through results. Example: `30.13800,-98.16009,30.40485,-97.28118`
| categoryId     | String| Restricts the returned results to venues matching the input category id.
| sort           | String| Sorts the list items. Possible values are recent and nearby. recent sorts the list items by the date added to the list. nearby sorts the list items by the distance from the center of the provided llBounds.

## Foursquare.addList
Allows users to create a new list.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| name           | String| Required The name of the list.
| description    | String| The description of the list.
| collaborative  | String| Boolean indicating if this list can be edited by friends.
| photoId        | String| The id of a photo that should be set as the list photo.

## Foursquare.getListFollowers
Returns a count and items of users following this list. 

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| listId      | String     | Id for a user-created list

## Foursquare.suggestItemListPhotos
Suggests photos that may be appropriate for this item. 

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| Id for a user-created list.
| itemId         | String| Id of item on this list.

## Foursquare.suggestListTips
Suggests tips that may be appropriate for this item.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| Id for a user-created list.
| itemId         | String| Id of item.

## Foursquare.getListItem
Gives details about a list item

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| Id for a user-created or followed list.
| itemId         | String| Id for an item in the parent list.

## Foursquare.suggestVenuesForList
Suggests venues that may be appropriate for this list. 

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| Id for a user-created list

## Foursquare.updatesList
Allows you to update a list.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| Id for a user-created list.
| name           | String| If present and a non-empty value, updates the List name.
| description    | String| If present and a non-empty value, updates the List description. If present and empty, will remove the List description.
| collaborative  | String| Boolean indicating if this list can be edited by friends. Once this has been set to true for a list, authenticated friends can edit the list via additem, deleteitem, etc.
| photoId        | String| If present and a non-empty value, updates the List photo. If present and empty, will remove the List photo.

## Foursquare.deleteItemFromList
Allows you to delete items from a list. One of itemId, venueId, or tipId must be provided.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| Id for a user-created or followed list or one of either USER_ID/tips or USER_ID/todos.
| itemId         | String| Id of the item to delete.
| venueId        | String| Id of a venue to be deleted. If the venue is on the list multiple times, e.g. multiple tips at the same venue, all items will be removed.
| tipId          | String| Id of a tip to be deleted.

## Foursquare.updateListItem
Allows you to add or remove photos and tips from items on user-created lists. 
*Note:* Only valid on user-created lists 
*Note:* Collaborators can only update items they added. List owners can not update any item.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| Id for a user-created list.
| itemId         | String| Id of the item to update.
| tipId          | String| If present and a non-empty value, adds or replaces a tip on this item. If present and empty, will remove the tip on this item.
| text           | String| If present creates a public tip on the venue and replaces any existing tip on the item. Cannot be used in conjuction with tipId or photoId
| url            | String| If adding a new tip via text, this can associate a url with the tip.
| photoId        | String| If present and a non-empty value, adds a photo to this item. If present and empty, will remove the photo on this item. If the photo was a private checkin photo, it will be promoted to a public venue photo.

## Foursquare.followList
Allows you to follow a list. 

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| Id of a user-created list.

## Foursquare.unfollowList
Allows you to unfollow a list.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| Id of a user-created list.

## Foursquare.moveItemOnList
Allows you to move an item on a list. One of beforeId or afterId must be specified.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| Id of a user-created list.
| itemId         | String| Id of the item on this list to move.
| beforeId       | String| Move `itemId` before `beforeId`.
| afterId        | String| Move `itemId` after `afterId`.

## Foursquare.shareList
Share a user-created list to twitter or facebook.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| listId         | String| List id to share.
| broadcast      | String| Where to broadcast this list. Send `twitter` if you want to send to twitter, `facebook` if you want to send to facebook, or `twitter,facebook` if you want to send to both.
| message        | String| A personal note to include with the share.

## Foursquare.addItemToList
Allows you to add an item to a list. 

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| followedListId | String| Id for a user-created or followed list as well as one of either USER_ID/tips or USER_ID/todos.
| venueId        | String| A venue to add to the list.
| url            | String| If adding a new tip via text, this can associate a url with the tip.
| tipId          | String| Used to add a tip to a list. Cannot be used in conjunction with the text and url fields.
| listId         | String| Used in conjuction with itemId, the id for a user created or followed list as well as one of either USER_ID/tips or USER_ID/todos.
| itemId         | String| Used in conjuction with listId, the id of an item on that list that we wish to copy to this list.

## Foursquare.getUpdateDetails
Allows you to retrieve update details.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| updateId       | String| The ID of the update to retrieve

## Foursquare.getNotificationUpdates
Retrieve a user's notification tray notifications

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| limit          | String| Maximum number of results to return, up to 99. Notifications are grouped over time, so there will usually be fewer than 99 results available at any given time. offset 0 Used to page through results. Only the 99 most recent notifications are visible, so offset must be no more than 99 - limit.

## Foursquare.markNotificationsAsRead
Mark notification tray notifications as read up, to a certain timestamp.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| highWatermark  | String| The timestamp of the most recent notification that the user viewed.

## Foursquare.getPhoto
Get details of a photo.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| photoId        | String| The ID of the photo to retrieve additional information for.

## Foursquare.getSingleSetting
Returns a setting for the acting user.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| settingId      | String| The name of a setting.

## Foursquare.getUserSettings
Returns the settings of the acting user.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.

## Foursquare.changeSingleSetting
Change a setting for the given user.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| settingId      | String| Name of setting to change, sendMayorshipsToTwitter, sendBadgesToTwitter, sendMayorshipsToFacebook, sendBadgesToFacebook, receivePings, receiveCommentPings.
| value          | Number| 1 for true, and 0 for false.

## Foursquare.searchSpecials
Returns a list of specials near the current location.

| Field           | Type       | Description
|-----------------|------------|----------
| clientId        | credentials| Application client id.
| clientSecret    | credentials| Application client secret key.
| location        | Select     | Latitude and longitude to search near. Format: `lat,lng`. Example: `40.7,-74`
| radius          | Number     | Limit results to venues within this many meters of the specified location. Defaults to a city-wide area.
| locationAccuracy| Float      | Accuracy of latitude and longitude, in meters.
| altitude        | Number     | Altitude of the user's location, in meters.
| altitudeAccuracy| Float      | Accuracy of the user's altitude, in meters.
| limit           | Number     | Number of results to return, up to 50.

## Foursquare.getSingleEvent
Get details of a event.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| eventId        | String| The ID of the event to retrieve additional information for.

## Foursquare.searchEvents
This is an experimental API and subject to change or breakage.

| Field        | Type       | Description
|--------------|------------|----------
| clientId     | credentials| Application client id.
| clientSecret | credentials| Application client secret key.
| domain       | String     |  Identifier for a known third-party event provider. This is used in conjunction with id. Currently songkick.com is the only supported value.
| eventId      | String     | Identifier used by third-party specifed in domain, which we will attempt to match against our events listings. eventId is the id of an event, participantId is the id of a participant, like a band or sports team.
| participantId| String     | Identifier used by third-party specifed in domain, which we will attempt to match against our events listings. eventId is the id of an event, participantId is the id of a participant, like a band or sports team.

## Foursquare.getEventCategories
Returns a hierarchical list of categories applied to events. 

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.

## Foursquare.getUserManagedPages
Returns an array of the pages a user manages.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.

## Foursquare.addPage
Allows users to create a new page. The creating user is added as a manager of the new page.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| name           | String| The name of the page

## Foursquare.getPageVenuesTimeSeriesData
Get daily venue stats for venues managed by a page over a time range.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| pageId         | String| The page whose venues to get timeseries data for
| startAt        | String| The start of the time range to retrieve stats for (seconds since epoch).
| endAt          | String| The end of the time range to retrieve stats for (seconds since epoch). If omitted, the current time is assumed.
| fields         | String| Specifies which fields to return. May be one or more of totalCheckins, newCheckins, uniqueVisitors, sharing, genders, ages, hours, separated by commas.

## Foursquare.getPageAccessToken
Returns an OAuth access token for the specified page. The requesting user must be a manager of the page.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| userId         | String| The page you want similar pages for.

## Foursquare.getPageVenues
Allows you to get the page's venues.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| Application client id.
| clientSecret| credentials| Application client secret key.
| pageId      | String     | The page whose venues to get venues for
| location    | String     | Not valid with ne or sw. Limits results to venues near this latitude and longitude within an optional radius.
| radius      | Number     | Can be used when including ll. Not valid with ne or sw. Limit results to venues within this many meters of the specified ll. The maximum supported radius is currently 100,000 meters.
| southWest   | Map     | Example: `44.3,37.2`. With northEast, limits results to the bounding quadrangle defined by the latitude and longitude given by sw as its south-west corner, and ne as its north-east corner. The bounding quadrangle is only supported for intent=browse searches. Not valid with ll or radius. Bounding quadrangles with an area up to approximately 10,000 square kilometers are supported.
| northEast   | String     | See `southWest`.
| offset      | Number     | The offset of which venues to return. Defaults to 0.
| limit       | Number     | The number of venues to return. Defaults to 20, max of 100.
| storeId     | Number     | Only return venues whose storeId matches. storeIds are defined by the page manager (and therefore namespaced to that particular page). They are the page's own internal identifier for that venue. *Cannot be used with any geo params*.

## Foursquare.getSinglePageUpdate
Get page update details.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| updateId       | String| The ID of the update to retrieve additional information for.
| limit          | String| The number of nearby venues to show (default 20).
| location       | String| The location of the current user.

## Foursquare.getPageUpdates
Returns a list of page updates created by the current user.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.

## Foursquare.likePageUpdate
Causes the current user to 'like' a page update. If there is a campaign associated with the update, the like will propagate to the special as well.

| Field          | Type  | Description
|----------------|-------|----------
| accessToken    | String| Access Token obtained from Foursquare OAuth.
| updateId       | String| The ID of the update to like.

