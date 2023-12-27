import { motion, useSpring, useScroll, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
  );

  return (
    <div>
      <motion.div
        style={{
          scaleX: spring,
          transformOrigin: "left",
          position: "sticky",
          background: background,
          width: "700px",
          height: "40px",
          top: 0,
        }}
      ></motion.div>
      <div style={{ maxWidth: "700px" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          molestias vel corporis ex tenetur dolore, totam rerum nihil earum,
          repellendus, nam repellat culpa? Deleniti doloremque vitae maiores
          dolore repellendus perferendis.
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          molestias vel corporis ex tenetur dolore, totam rerum nihil earum,
          repellendus, nam repellat culpa? Deleniti doloremque vitae maiores
          dolore repellendus perferendis.
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          molestias vel corporis ex tenetur dolore, totam rerum nihil earum,
          repellendus, nam repellat culpa? Deleniti doloremque vitae maiores
          dolore repellendus perferendis.
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          molestias vel corporis ex tenetur dolore, totam rerum nihil earum,
          repellendus, nam repellat culpa? Deleniti doloremque vitae maiores
          dolore repellendus perferendis.
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          molestias vel corporis ex tenetur dolore, totam rerum nihil earum,
          repellendus, nam repellat culpa? Deleniti doloremque vitae maiores
          dolore repellendus perferendis.
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          molestias vel corporis ex tenetur dolore, totam rerum nihil earum,
          repellendus, nam repellat culpa? Deleniti doloremque vitae maiores
          dolore repellendus perferendis.
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          molestias vel corporis ex tenetur dolore, totam rerum nihil earum,
          repellendus, nam repellat culpa? Deleniti doloremque vitae maiores
          dolore repellendus perferendis.
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          molestias vel corporis ex tenetur dolore, totam rerum nihil earum,
          repellendus, nam repellat culpa? Deleniti doloremque vitae maiores
          dolore repellendus perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          molestias vel corporis ex tenetur dolore, totam rerum nihil earum,
          repellendus, nam repellat culpa? Deleniti doloremque vitae maiores
          dolore repellendus perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          provident, consectetur beatae perspiciatis ratione enim quibusdam
          sequi ipsum, doloremque amet facilis nemo, impedit nam voluptas quia
          eligendi commodi laboriosam similique!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dignissimos sit dolore architecto ea a id nulla omnis suscipit
          deleniti? Autem iure quidem dolorum quasi at, itaque non numquam
          dolor.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dignissimos sit dolore architecto ea a id nulla omnis suscipit
          deleniti? Autem iure quidem dolorum quasi at, itaque non numquam
          dolor.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dignissimos sit dolore architecto ea a id nulla omnis suscipit
          deleniti? Autem iure quidem dolorum quasi at, itaque non numquam
          dolor.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dignissimos sit dolore architecto ea a id nulla omnis suscipit
          deleniti? Autem iure quidem dolorum quasi at, itaque non numquam
          dolor.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dignissimos sit dolore architecto ea a id nulla omnis suscipit
          deleniti? Autem iure quidem dolorum quasi at, itaque non numquam
          dolor.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dignissimos sit dolore architecto ea a id nulla omnis suscipit
          deleniti? Autem iure quidem dolorum quasi at, itaque non numquam
          dolor.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dignissimos sit dolore architecto ea a id nulla omnis suscipit
          deleniti? Autem iure quidem dolorum quasi at, itaque non numquam
          dolor.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dignissimos sit dolore architecto ea a id nulla omnis suscipit
          deleniti? Autem iure quidem dolorum quasi at, itaque non numquam
          dolor.
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimation;
