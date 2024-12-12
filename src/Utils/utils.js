import { IoCartOutline } from "react-icons/io5";
import { CiHeart  } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

export const categoriesArray = [
    {
        id : 6,
        item : 'All categories'
    },
    {
        id : 1,
        item : 'milk & dairies'
    },
    {
        id : 2,
        item : 'clothing'
    },
    {
        id : 3,
        item : 'pet foods'
    },
    {
        id : 4,
        item : 'baking material'
    },
    {
        id : 5,
        item : 'fresh fruit'
    },
]

export const navItems = [
    {
        id : 1,
        element : 'wishlist',
        icon : CiHeart
    },
    {
        id : 2,
        element : 'cart',
        icon : IoCartOutline
    },
    {
        id : 3,
        element : 'account',
        icon : FiUser
    }
]