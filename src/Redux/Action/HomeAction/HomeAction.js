import { HomeType } from "../../Type/HomeType/HomeType";

export const takeBanners = (bannerList) => ({
    type: HomeType.TAKE_BANNERS,
    bannerList
})