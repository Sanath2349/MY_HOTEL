import React from "react";
import styles from "../../Components/About/styles/Aboutus.module.css";
import managerPhoto from "../../assets/About/manger.png"; // Ensure you replace this with the actual path

export default function Aboutus() {
  return (
    <div>
      {/* Top Section with background image */}
      <section className={styles.topSection}>
        <div className={styles.overlay}>
          <h1>About us</h1>
          <p>
            The elegant luxury bedrooms in this gallery showcase custom interior
            designs & decorating ideas. View pictures and find your perfect
            luxury bedroom design.
          </p>
        </div>
      </section>

      {/* Content Section with two columns */}
      <section className={styles.contentSection}>
        <div className={styles.imageColumn}>
          <div className={styles.imageBackground}></div>
          <img
            src={managerPhoto}
            alt="Chidinma James (Manager)"
            className={styles.managerImage}
          />
          <h3>Chidinma James (Manager)</h3>
        </div>
        <div className={styles.textColumn}>
          <p>
            The United Nations is an international organization founded in 1945.
            Currently made up of 193 Member States, the UN and its work are
            guided by the purposes and principles contained in its founding
            Charter.
          </p>
          <p>
            Due to the powers vested in its founding Charter, the UN can take
            action on a wide range of issues, and provide a forum for its 193
            Member States to express their views, through the General Assembly,
            the Security Council, the Economic and Social Council, and other
            bodies and committees.
          </p>
          <p>
            The United Nations is an international organization founded in 1945.
            Currently made up of 193 Member States, the UN and its work are
            guided by the purposes and principles contained in its founding
            Charter. The UN has evolved over the years to keep pace with a
            rapidly changing world. But one thing has stayed the same: it
            remains the one place on Earth where all the world's nations can
            gather together, discuss common problems, and find shared solutions
            that benefit all of humanity. The Secretary-General is Chief
            Administrative Officer of the UN  and is also a symbol of the
            Organization's ideals and an advocate for all the world's peoples,
            especially the poor and vulnerable.
          </p>
        </div>
      </section>
    </div>
  );
}
