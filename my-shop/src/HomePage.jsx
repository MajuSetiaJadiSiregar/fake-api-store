import React, { Component } from "react";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="pushmenu menu-home5">
            <div className="menu-push">
              <span className="close-left js-close">
                <i className="fa fa-times f-20" />
              </span>
              <div className="clearfix" />
              <form
                role="search"
                method="get"
                id="searchform"
                className="searchform"
                action="/search"
              >
                <div>
                  <label className="screen-reader-text" htmlFor="q" />
                  <input
                    type="text"
                    placeholder="Search for products"
                    defaultValue
                    name="q"
                    id="q"
                    autoComplete="off"
                  />
                  <input type="hidden" name="type" defaultValue="product" />
                  <button type="submit" id="searchsubmit">
                    <i className="ion-ios-search-strong" />
                  </button>
                </div>
              </form>
              <ul className="nav-home5 js-menubar">
                <li className="level1 active dropdown">
                  <a href="#">Home</a>
                  <span className="icon-sub-menu" />
                  <ul className="menu-level1 js-open-menu">
                    <li className="level2">
                      <a href="home_v1.html" title>
                        Home 1
                      </a>
                    </li>
                    <li className="level2">
                      <a href="home_v2.html" title>
                        Home 2
                      </a>
                    </li>
                    <li className="level2">
                      <a href="home_v3.html" title>
                        Home 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="level1 active dropdown">
                  <a href="#">Shop</a>
                  <span className="icon-sub-menu" />
                  <div className="menu-level1 js-open-menu">
                    <ul className="level1">
                      <li className="level2">
                        <a href="#">Shop Type</a>
                        <ul className="menu-level-2">
                          <li className="level3">
                            <a href="category_v1.html" title>
                              Category V1
                            </a>
                          </li>
                          <li className="level3">
                            <a href="category_v1_2.html" title>
                              Category V1.2
                            </a>
                          </li>
                          <li className="level3">
                            <a href="category_v2.html" title>
                              Category V2
                            </a>
                          </li>
                          <li className="level3">
                            <a href="category_v2_2.html" title>
                              Category V2.2
                            </a>
                          </li>
                          <li className="level3">
                            <a href="category_v3.html" title>
                              Category V3
                            </a>
                          </li>
                          <li className="level3">
                            <a href="category_v3_2.html" title>
                              Category V3.2
                            </a>
                          </li>
                          <li className="level3">
                            <a href="category_v4.html" title>
                              Category V4
                            </a>
                          </li>
                          <li className="level3">
                            <a href="category_v4_2.html" title>
                              Category V4.2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="level2">
                        <a href="#">Single Product Type</a>
                        <ul className="menu-level-2">
                          <li className="level3">
                            <a href="product_v1.html" title>
                              Product Single 1
                            </a>
                          </li>
                          <li className="level3">
                            <a href="product_v2.html" title>
                              Product Single 2
                            </a>
                          </li>
                          <li className="level3">
                            <a href="product_v3.html" title>
                              Product Single 3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="level2">
                        <a href="#">Order Page</a>
                        <ul className="menu-level-2">
                          <li className="level3">
                            <a href="cartpage.html" title>
                              Cart Page
                            </a>
                          </li>
                          <li className="level3">
                            <a href="checkout.html" title>
                              Checkout
                            </a>
                          </li>
                          <li className="level3">
                            <a href="compare.html" title>
                              Compare
                            </a>
                          </li>
                          <li className="level3">
                            <a href="quickview.html" title>
                              Quickview
                            </a>
                          </li>
                          <li className="level3">
                            <a href="trackyourorder.html">Track Order</a>
                          </li>
                          <li className="level3">
                            <a href="wishlist.html">WishList</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="clearfix" />
                  </div>
                </li>
                <li className="level1">
                  <a href="#">Pages</a>
                  <span className="icon-sub-menu" />
                  <ul className="menu-level1 js-open-menu">
                    <li className="level2">
                      <a href="about.html" title="About Us ">
                        About Us{" "}
                      </a>
                    </li>
                    <li className="level2">
                      <a href="contact.html" title="Contact">
                        Contact
                      </a>
                    </li>
                    <li className="level2">
                      <a href="404.html" title={404}>
                        404
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="level1">
                  <a href="#">Blog</a>
                  <span className="icon-sub-menu" />
                  <ul className="menu-level1 js-open-menu">
                    <li className="level2">
                      <a href="blog.html" title="Blog Standar">
                        Blog Category
                      </a>
                    </li>
                    <li className="level2">
                      <a href="blogdetail.html" title="Blog Gird">
                        Blog Detail
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* end push menu*/}
          {/* Menu Mobile */}
          <div className="menu-mobile-left-content">
            <ul>
              <li>
                <a href="#">
                  <img src="img/icon_hot.png" alt="Icon Hot Deals" />{" "}
                  <p>Hot Deals</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/icon_food.png" alt="Icon Food" /> <p>Food</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/icon_mobile.png" alt="Icon Mobile & Tablet" />{" "}
                  <p>Mobile &amp; Tablet</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="img/icon_electric.png"
                    alt="Icon Electric Appliances"
                  />{" "}
                  <p>Electric Appliances</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="img/icon_computer.png"
                    alt="Icon Electronics & Technology"
                  />{" "}
                  <p>Electronics &amp; Technology</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/icon_fashion.png" alt="Icon Fashion" />{" "}
                  <p>Fashion</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/icon_health.png" alt="Icon Health & Beauty" />{" "}
                  <p>Health &amp; Beauty</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/icon_mother.png" alt="Icon Mother & Baby" />{" "}
                  <p>Mother &amp; Baby</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/icon_book.png" alt="Icon Books & Stationery" />{" "}
                  <p>Books &amp; Stationery</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/icon_tablet.png" alt="Icon Home & Life" />{" "}
                  <p>Home &amp; Life</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/icon_sport.png" alt="Icon Sports & Outdoors" />{" "}
                  <p>Sports &amp; Outdoors</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/icon_auto.png" alt="Icon Auto & Moto" />{" "}
                  <p>Auto &amp; Moto</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/icon_voucher.png" alt="Icon Voucher Service" />{" "}
                  <p>Voucher Service</p>
                </a>
              </li>
            </ul>
          </div>
          {/* Header Box */}
          <div className="wrappage">
            <header className="relative full-width box-shadow">
              <div className="clearfix container-web relative">
                <div className=" container">
                  <div className="row">
                    <div className=" header-top">
                      <p className="contact_us_header col-md-4 col-xs-12 col-sm-3 clear-margin">
                        <img
                          src="img/icon_phone_top.png"
                          alt="Icon Phone Top Header"
                        />{" "}
                        Call us{" "}
                        <span className="text-red bold">070-7782-7137</span>
                      </p>
                      <div className="clear-padding menu-header-top text-right col-md-8 col-xs-12 col-sm-6">
                        <ul className="clear-margin">
                          <li className="relative">
                            <a href="#">My Account</a>
                          </li>
                          <li className="relative">
                            <a href="#">Wishlist</a>
                          </li>
                          <li className="relative">
                            <a href="#">EN</a>
                            <ul>
                              <li className="relative">
                                <a href="#">JP</a>
                              </li>
                              <li className="relative">
                                <a href="#">EN</a>
                              </li>
                              <li className="relative">
                                <a href="#">CN</a>
                              </li>
                            </ul>
                          </li>
                          <li className="relative">
                            <a href="#">USD</a>
                            <ul>
                              <li className="relative">
                                <a href="#">AUD</a>
                              </li>
                              <li className="relative">
                                <a href="#">USD</a>
                              </li>
                              <li className="relative">
                                <a href="#">CAD</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="clearfix header-content full-width relative">
                      <div className="clearfix icon-menu-bar">
                        <i
                          className="data-icon data-icon-arrows icon-arrows-hamburger-2 icon-pushmenu js-push-menu"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="clearfix logo">
                        <a href="#">
                          <img alt="Logo" src="img/logo.png" />
                        </a>
                      </div>
                      <div className="clearfix search-box relative float-left">
                        <form method="GET" action="/" className>
                          <div className="clearfix category-box relative">
                            <select name="cate_search">
                              <option>All Category</option>
                              <option>Food</option>
                              <option>Mobile &amp; Tablet</option>
                              <option>Electric Appliances</option>
                              <option>Electronics &amp; Technology</option>
                              <option>Fashion</option>
                              <option>Health &amp; Beauty</option>
                              <option>Mother &amp; Baby</option>
                              <option>Books &amp; Stationery</option>
                              <option>Home &amp; Life</option>
                              <option>Sports &amp; Outdoors</option>
                              <option>Auto &amp; Moto</option>
                              <option>Voucher Service</option>
                            </select>
                          </div>
                          <input
                            type="text"
                            name="s"
                            placeholder="Enter keyword here . . ."
                          />
                          <button
                            type="submit"
                            className="animate-default button-hover-red"
                          >
                            Search
                          </button>
                        </form>
                      </div>
                      <div className="clearfix icon-search-mobile absolute">
                        <i
                          onclick="showBoxSearchMobile()"
                          className="data-icon data-icon-basic icon-basic-magnifier"
                        />
                      </div>
                      <div
                        className="clearfix cart-website absolute"
                        onclick="showCartBoxDetail()"
                      >
                        <img alt="Icon Cart" src="img/icon_cart.png" />
                        <p className="count-total-shopping absolute">2</p>
                      </div>
                      <div className="cart-detail-header border">
                        <div className="relative">
                          <div className="product-cart-son clearfix">
                            <div className="image-product-cart float-left center-vertical-image ">
                              <a href="#">
                                <img src="img/product_image_6-min.png" alt="" />
                              </a>
                            </div>
                            <div className="info-product-cart float-left">
                              <p className="title-product title-hover-black">
                                <a className="animate-default" href="#">
                                  MH02-Black09
                                </a>
                              </p>
                              <p className="clearfix price-product">
                                $350{" "}
                                <span className="total-product-cart-son">
                                  (x1)
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="product-cart-son">
                            <div className="image-product-cart float-left center-vertical-image">
                              <a href="#">
                                <img src="img/product_image_7-min.png" alt="" />
                              </a>
                            </div>
                            <div className="info-product-cart float-left">
                              <p className="title-product title-hover-black">
                                <a className="animate-default" href="#">
                                  Voyage Yoga Bag
                                </a>
                              </p>
                              <p className="clearfix price-product">
                                $350{" "}
                                <span className="total-product-cart-son">
                                  (x1)
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative border no-border-l no-border-r total-cart-header">
                          <p className="bold clear-margin">Subtotal:</p>
                          <p className=" clear-margin bold">$700</p>
                        </div>
                        <div className="relative btn-cart-header">
                          <a
                            href="#"
                            className="uppercase bold animate-default"
                          >
                            view cart
                          </a>
                          <a
                            href="#"
                            className="uppercase bold button-hover-red animate-default"
                          >
                            checkout
                          </a>
                        </div>
                      </div>
                      <div
                        className="mask-search absolute clearfix"
                        onclick="hiddenBoxSearchMobile()"
                      />
                      <div className="clearfix box-search-mobile"></div>
                    </div>
                  </div>
                  <div className="row">
                    <a
                      className="menu-vertical hidden-md hidden-lg"
                      onclick="showMenuMobie()"
                    >
                      <span className="animate-default">
                        <i className="fa fa-list" aria-hidden="true" /> all
                        categories
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="header-ontop">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="clearfix logo">
                        <a href="#">
                          <img alt="Logo" src="img/logo.png" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="menu-header">
                        <ul className="main__menu clear-margin">
                          <li className="title-hover-red">
                            <a className="animate-default" href="#">
                              home
                            </a>
                            <ul className="sub-menu mega-menu">
                              <li className="relative">
                                <a
                                  className="animate-default center-vertical-image"
                                  href="home_v1.html"
                                >
                                  <img src="img/home_1_menu-min.png" alt="" />
                                </a>
                                <p>
                                  <a href="home_v1.html">Home 1</a>
                                </p>
                              </li>
                              <li className="relative">
                                <a
                                  className="animate-default center-vertical-image"
                                  href="home_v2.html"
                                >
                                  <img src="img/home_2_menu-min.png" alt="" />
                                </a>
                                <p>
                                  <a href="home_v2.html">Home 2</a>
                                </p>
                              </li>
                              <li className="relative">
                                <a
                                  className="animate-default center-vertical-image"
                                  href="home_v3.html"
                                >
                                  <img src="img/home_3_menu-min.png" alt="" />
                                </a>
                                <p>
                                  <a href="home_v3.html">Home 3</a>
                                </p>
                              </li>
                            </ul>
                          </li>
                          <li className="title-hover-red">
                            <a className="animate-default" href="#">
                              shop
                            </a>
                            <div className="sub-menu mega-menu-v2">
                              <ul>
                                <li>Catgory Type</li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="category_v1.html"
                                  >
                                    Category v1
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="category_v1_2.html"
                                  >
                                    Category v1.2
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="category_v2.html"
                                  >
                                    Category v2
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="category_v2_2.html"
                                  >
                                    Category v2.2
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="category_v3.html"
                                  >
                                    Category v3
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="category_v3_2.html"
                                  >
                                    Category v3.2
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="category_v4.html"
                                  >
                                    Category v4
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="category_v4_2.html"
                                  >
                                    Category v4.2
                                  </a>
                                </li>
                              </ul>
                              <ul>
                                <li>Single Product Type</li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="product_v1.html"
                                  >
                                    Product Single 1
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="product_v2.html"
                                  >
                                    Product Single 2
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="product_v3.html"
                                  >
                                    Product Single 3
                                  </a>
                                </li>
                              </ul>
                              <ul>
                                <li>Order Page</li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="cartpage.html"
                                  >
                                    Cart Page
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="checkout.html"
                                  >
                                    Checkout
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="compare.html"
                                  >
                                    Compare
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="quickview.html"
                                  >
                                    QuickView
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="trackyourorder.html"
                                  >
                                    Track Order
                                  </a>
                                </li>
                                <li className="title-hover-red">
                                  <a
                                    className="animate-default clear-padding"
                                    href="wishlist.html"
                                  >
                                    WishList
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="title-hover-red">
                            <a className="animate-default" href="#">
                              pages
                            </a>
                            <ul>
                              <li className="title-hover-red">
                                <a
                                  className="animate-default"
                                  href="about.html"
                                >
                                  About Us
                                </a>
                              </li>
                              <li className="title-hover-red">
                                <a
                                  className="animate-default"
                                  href="contact.html"
                                >
                                  Contact
                                </a>
                              </li>
                              <li className="title-hover-red">
                                <a className="animate-default" href="404.html">
                                  404
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="title-hover-red">
                            <a className="animate-default" href="#">
                              Blog
                            </a>
                            <ul>
                              <li className="title-hover-red">
                                <a className="animate-default" href="blog.html">
                                  Blog Category
                                </a>
                              </li>
                              <li className="title-hover-red">
                                <a
                                  className="animate-default"
                                  href="blogdetail.html"
                                >
                                  Blog Detail
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* End Header Box */}
            {/* Content Box */}
            <div className="relative clearfix full-width">
              {/* Menu & Slide */}
              <div className="clearfix container-web relative">
                <div className=" container relative">
                  <div className="row">
                    <div className="clearfix relative menu-slide clear-padding bottom-margin-default">
                      {/* Menu */}
                      <div className="clearfix menu-web relative">
                        <ul>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_hot.png"
                                alt="Icon Hot Deals"
                              />{" "}
                              <p>Hot Deals</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="img/icon_food.png" alt="Icon Food" />{" "}
                              <p>Food</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_mobile.png"
                                alt="Icon Mobile & Tablet"
                              />{" "}
                              <p>Mobile &amp; Tablet</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_electric.png"
                                alt="Icon Electric Appliances"
                              />{" "}
                              <p>Electric Appliances</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_computer.png"
                                alt="Icon Electronics & Technology"
                              />{" "}
                              <p>Electronics &amp; Technology</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_fashion.png"
                                alt="Icon Fashion"
                              />{" "}
                              <p>Fashion</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_health.png"
                                alt="Icon Health & Beauty"
                              />{" "}
                              <p>Health &amp; Beauty</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_mother.png"
                                alt="Icon Mother & Baby"
                              />{" "}
                              <p>Mother &amp; Baby</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_book.png"
                                alt="Icon Books & Stationery"
                              />{" "}
                              <p>Books &amp; Stationery</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_tablet.png"
                                alt="Icon Home & Life"
                              />{" "}
                              <p>Home &amp; Life</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_sport.png"
                                alt="Icon Sports & Outdoors"
                              />{" "}
                              <p>Sports &amp; Outdoors</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_auto.png"
                                alt="Icon Auto & Moto"
                              />{" "}
                              <p>Auto &amp; Moto</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="img/icon_voucher.png"
                                alt="Icon Voucher Service"
                              />{" "}
                              <p>Voucher Service</p>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Slide */}
                      <div className="clearfix slide-box-home slide-v1 relative">
                        <div className="clearfix slide-home owl-carousel owl-theme">
                          <div className="item">
                            <img src="img/banner.png" alt="Banner Header 1" />
                          </div>
                          <div className="item">
                            <img src="img/slide_2.png" alt="Banner Header 2" />
                          </div>
                        </div>
                      </div>
                      <div className=" box-banner-small-v1 box-banner-small">
                        <div className="effect-layla relative clear-padding col-md-4 col-sm-4 col-xs-4 float-left zoom-image-hover">
                          <img src="img/banner_small.png" alt="" />
                          <a href="#" className="relative" />
                        </div>
                        <div className="effect-layla relative clear-padding col-md-4 col-sm-4 col-xs-4 float-left zoom-image-hover">
                          <img src="img/banner_small_1.png" alt="" />
                          <a href="#" className="relative" />
                        </div>
                        <div className="effect-layla relative clear-padding col-md-4 col-sm-4 col-xs-4 float-left zoom-image-hover">
                          <img src="img/banner_small_2.png" alt="" />
                          <a href="#" className="relative" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="relative full-width">
              <div className=" top-footer full-width">
                <div className="clearfix container-web relative">
                  <div className=" container">
                    <div className="row">
                      <div className="clearfix col-md-9 col-sm-12 clear-padding col-xs-12">
                        <div className="clearfix text-subscribe text-subscribe">
                          <i className="fa fa-envelope-o" aria-hidden="true" />
                          <p>sign up for newsletter</p>
                          <p>Get updates on discount &amp; counpons.</p>
                        </div>
                        <div className="clearfix form-subscribe">
                          <input
                            type="text"
                            name="email-subscribe"
                            placeholder="Enter your email . . ."
                          />
                          <button className="animate-default button-hover-red">
                            subscribe
                          </button>
                        </div>
                      </div>
                      <div className="clearfix col-md-3 col-sm-12 col-xs-12 clear-padding social-box text-right">
                        <a href="#">
                          <img
                            src="img/social_tw-min.png"
                            alt="Icon Social Twiter"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="img/social_fa-min.png"
                            alt="Icon Social Facebook"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="img/social_int-min.png"
                            alt="Icon Social Instagram"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="img/social_yt-min.png"
                            alt="Icon Social Youtube"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix container-web relative">
                <div className=" container clear-padding">
                  <div className="row">
                    <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                      <p>my account</p>
                      <ul className="list-footer">
                        <li>
                          <a href="#">My Account</a>
                        </li>
                        <li>
                          <a href="#">Login</a>
                        </li>
                        <li>
                          <a href="#">My Cart</a>
                        </li>
                        <li>
                          <a href="#">My Wishlist</a>
                        </li>
                        <li>
                          <a href="#">My Compare</a>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                      <p>information</p>
                      <ul className="list-footer">
                        <li>
                          <a href="#">Information</a>
                        </li>
                        <li>
                          <a href="#">Orders History</a>
                        </li>
                        <li>
                          <a href="#">My Wishlist</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Site Map</a>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                      <p>our services</p>
                      <ul className="list-footer">
                        <li>
                          <a href="#">Product Recall</a>
                        </li>
                        <li>
                          <a href="#">Gift Vouchers</a>
                        </li>
                        <li>
                          <a href="#">Returns And Exchanges</a>
                        </li>
                        <li>
                          <a href="#">Shipping Options</a>
                        </li>
                        <li>
                          <a href="#">Terms Of Use</a>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                      <p>contact us</p>
                      <ul className="icon-footer">
                        <li>
                          <i className="fa fa-home" aria-hidden="true" /> 262
                          Milacina Mrest, Behansed, Paris
                        </li>
                        <li>
                          <i className="fa fa-envelope" aria-hidden="true" />{" "}
                          contact@yourcompany.com
                        </li>
                        <li>
                          <i className="fa fa-phone" aria-hidden="true" />{" "}
                          070-7782-9137
                        </li>
                        <li>
                          <i className="fa fa-fax" aria-hidden="true" />{" "}
                          070-7782-9138
                        </li>
                        <li>
                          <i className="fa fa-clock-o" aria-hidden="true" />{" "}
                          09:00 AM - 18:00 PM
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bottom-footer full-width">
                <div className="clearfix container-web">
                  <div className=" container">
                    <div className="row">
                      <div className="clearfix col-md-7 clear-padding copyright">
                        <p>
                          Copyright © 2018 by EngoCreative. All Rights Reserved.
                        </p>
                      </div>
                      <div className="clearfix footer-icon-bottom col-md-5 float-right clear-padding">
                        <div className="icon_logo_footer float-right">
                          <img src="img/image_payment_footer-min.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
