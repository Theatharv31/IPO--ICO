import React, { useState } from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";

const TokenSale = ({ buyToken, tokenSale, currentAccount }) => {
  const [nToken, setNToken] = useState(1);
  const [tokenHolders, setTokenHolders] = useState([]);

  const handleAllotment = () => {
    // Simulate refund logic
    if (tokenHolders.length === 0) {
      alert("No token holders to refund.");
      return;
    }

    const refunds = tokenHolders.map(({ address, paidAmount }) => {
      const refundAmount = paidAmount * 0.5;
      console.log(`Refunding ${refundAmount} to ${address}`);
      return { address, refundAmount };
    });

    console.log("Refund process complete:", refunds);
    alert("50% refund processed for all token holders.");
  };

  const handleBuyToken = (tokens) => {
    const amountPaid = tokens * 100; // Example amount calculation
    const address = "0xExampleAddress"; // Replace with actual user address
    setTokenHolders([...tokenHolders, { address, paidAmount: amountPaid }]);
    buyToken(tokens);
  };

  return (
    <section
      id="token"
      className="section_token token_sale bg_light_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/token_bg.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Token Sale
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                ABD is the coin name chosen by this company. To buy one share,
                you need to purchase one ABD. Each company has a different name
                for its coin.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Starting Time:
              </h6>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Dec 10, 2024 (Mon 10:00 Am)
              </p>
            </div>
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Ending Time:
              </h6>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Dec 13, 2024 (Mon 05:00 Pm)
              </p>
            </div>
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Token Exchange Rate
              </h6>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                1 ETH = 10000 INR, 1 BTC = 500000 INR ! Lite = 4000 INR 1 XRP =
                300 INR
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="token_sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
              <div
                className="animation tk_countdown text-center token_countdwon_bg"
                data-animation="fadeInUp"
                data-animation-delay="0.1s"
              >
                <div className="field_form">
                  <div className="row">
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.4s"
                    >
                      <input
                        type="number"
                        required
                        placeholder="Enter in Lots { 1 = 14 ABD }"
                        id="first-name"
                        min={1}
                        className="form-control"
                        onChange={(e) => setNToken(e.target.value)}
                        name="token"
                      />
                    </div>
                  </div>
                </div>
                <a
                  onClick={() => handleBuyToken(nToken * 14)}
                  className="btn btn-default btn-radius animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.1s"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Buy Tokens "ABD"
                </a>
                
                  <button
                    onClick={handleAllotment}
                    className="btn btn-primary mt-3"
                  >
                    Allotment
                  </button>
                
                <ul className="icon_list list_none d-flex justify-content-center">
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5"
                  >
                    <FaEthereum />
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5"
                  >
                    <BsCurrencyBitcoin />
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5"
                  >
                    <SiLitecoin />
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5"
                  >
                    <SiRipple />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Price Band
              </h6>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                INR 700 - 800
              </p>
            </div>
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                How Much Subscription done till this time?
              </h6>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                {tokenSale?.tokenSold} INR {((tokenSale?.tokenSold / 5000) * 100).toFixed(2)} %
              </p>
            </div>
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Acceptable Currency
              </h6>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                INR, BTC, ETH, XRP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSale;
