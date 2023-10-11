"use client";
import { useEffect, useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Column } from "@/components";
import useDimension from "@/hooks/useDimension";

// Array of image URLs
const images2 = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
];

// const images = [
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/1.mp4",
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/2.mp4",
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/3.mp4",
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/4.mp4",
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/5.mp4",
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/6.mp4",
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/7.mp4",
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/8.mp4",
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/9.mp4",
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/10.mp4",
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/11.mp4",
//   "https://morph-cdn.s3.us-west-2.amazonaws.com/landing/12.mp4",
// ];

const images = [
  "https://d1p14e7crsfwok.cloudfront.net/1.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/2.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/3.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/4.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/5.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/6.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/7.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/8.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/9.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/10.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/11.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/12.mp4",
];

// const images = [
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
//   "https://tagging-test-morph.s3.us-west-2.amazonaws.com/landing/11.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgXfabn2VJmWfH%2FKBBrZo5PN1WrGNrz%2Fdpaj4TVY5IoCkCIBwaimOOtHf5cpBTZckO4KYl1PYlfsuSFMK%2FeuRUPzh4KogDCNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjkzNTUwNzM1MjI2IgwiwyTOdRwdbA3QGoIq3AICFWq4KJDNqsGQylWV8OXi8GShiaVyjWI691%2FZChaK6EkX%2BAeB7jUzsy4dE9r7r4Q9qs4643EJXN5fdIHO7UZKlkFOozcSykFYVIhnLCNNSeiFZNeEXNEKglt24Q0LKHCURaZGjmhC4lODdH085PzFL2djT7q47siLKuk5JR18J7aiF3Rt1uWx2ECY7di%2BwuZttN8pgj7G5qUK%2Be2nLR0IFwvp10SPEvk8nzOJHafHx4F%2F%2BP75MEGdkQty81oV5n1y0xsRZxxnI%2B6s2pH9UaPrqe9vv2sT%2BDt9xf2k0GVOdcQJqjz4nWQW01BRj3JauxP5NxHhNvFXHZPnUjacRN6bMJsesy6UoWuM%2Bcq%2FfZrszMe8qbTERC6QmLzAtaa%2BMqmho6C1mMzwhlzA3i922RD7Akuq7Z3laLeq%2Bb2BGzMKQraWQnsfJ32cX9vhGKOzEZiDKCWIs%2FKUiYz4ti4w5%2FqTqQY6tAII7H1FYTk0EB5hVItj6aKRid26dFrQxigXHn0LweKg91AX8rhY8nZfSWGswMRWLRfGyGvhEqgWnhq7fQSc4pbif81Jla1GEpnXZbACU2wgxIMK%2F3%2Faael6upxOi4SejAhQtxrisbt%2BGvCpfaC%2Brnj1zEnABf0jM3aHF65Txep%2BMOwBtp%2F7RMCl7PViJIlkKqy0xbIwRd4Ghd8au1dYug%2BFWYzdLgm006WcvqHnrtclGysbcrtcLbr0V2gdyEOHfozqlLeVwbs1TEg5x9dnT334oLU3MulhK3GYM8Bvteo6i6GIw3m%2FK8X9Uhk2ggHMCNZqszgnLdffl7Pg5vAE%2BFN0sEI82A1i%2Bf4D3CBdBkwET%2FbRAJwIzbFwapH8X%2Bex1%2FwmpkFw2nEtz9mW8Jx3OEq5%2Bv%2BN7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231010T135923Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUIWH4X55NNSBUGNY%2F20231010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4373a2b484a5aedd4bb76463bdf50890a6341c9816febae853a617619bd5a5d2",
// ];

// const images = [
//   "/images/1.mp4",
//   "/images/2.mp4",
//   "/images/3.mp4",
//   "/images/4.mp4",
//   "/images/5.mp4",
//   "/images/6.mp4",
//   "/images/7.mp4",
//   "/images/8.mp4",
//   "/images/9.mp4",
//   "/images/10.mp4",
//   "/images/11.mp4",
//   "/images/12.mp4",
// ];

const ColumnContainer: React.FC = () => {
  // Create a reference for the columnContainer element
  const columnContainer = useRef(null);
  // Get the height value property from the dimension state
  const { height } = useDimension();
  // Get scrollYProgress using the useScroll hook on the columnContainer element
  const { scrollYProgress } = useScroll({
    target: columnContainer,
    //Start tracking at the bottom of the window and top of the columnContainer and stop tracking at the top of the window and bottom of the columnContainer
    offset: ["start end", "end start"],
  });

  // Calculate transformations based on scrollYProgress and height
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    // Define a recursive animation function using requestAnimationFrame
    function raf(time: any) {
      lenis.raf(time); // Update the Lenis instance with the current time
      requestAnimationFrame(raf); // Request the next animation frame
    }

    requestAnimationFrame(raf); // Start the animation loop by calling requestAnimationFrame with raf
  }, []);

  return (
    // <div
    //   ref={columnContainer}
    //   className="bg-slate-950 h-[175vh] relative flex gap-[2vw] p-[2vw] overflow-hidden"
    // >
    //   <Column
    //     y={y}
    //     images={[images[0], images[1], images[2], images[6], images[6]]}
    //   />
    //   <Column
    //     y={y2}
    //     images={[images[3], images[4], images[5], images[6], images[6]]}
    //   />
    //   <Column
    //     y={y3}
    //     images={[images[6], images[7], images[8], images[6], images[6]]}
    //   />
    //   <Column
    //     y={y4}
    //     images={[images[9], images[10], images[11], images[6], images[6]]}
    //   />
    // </div>
    <div
      ref={columnContainer}
      className="bg-slate-950 h-[70vh] md:h-[175vh] relative flex gap-[2vw] p-[2vw] overflow-hidden"
    >
      <Column
        y={y}
        images={[images[0], images[1], images[2], images[5], images[11]]}
      />
      <Column
        y={y2}
        images={[images[3], images[4], images[5], images[9], images[4]]}
      />

      <Column
        y={y3}
        images={[images[6], images[7], images[8], images[2], images[3]]}
      />

      <Column
        y={y4}
        images={[images[9], images[10], images[11], images[8], images[7]]}
      />
    </div>
  );
};
export default ColumnContainer;
