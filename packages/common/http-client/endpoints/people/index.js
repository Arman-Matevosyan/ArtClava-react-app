/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
export function PeopleEndpoint (baseUrl, people) {
   const factory = {
       people1: 'people/1/'
   };
   
return `${baseUrl}/${factory[people]}`;
};