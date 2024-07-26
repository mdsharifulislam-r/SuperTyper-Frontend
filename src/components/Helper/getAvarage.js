
   /**
     * 
     * @param {Array} data 
     */
export default function getAvarage(data) {
        let wpm = [];
        let acc = [];
        let cpm = [];
        data?.forEach((item) => {
          wpm.push(item.wpm);
          acc.push(item.acc);
          cpm.push(item.cpm);
        });
        return {
          wpm: Math.floor(
            wpm.reduce((prev, cur) => {
              return prev + cur;
            }, 0) / wpm.length
          ),
          acc: Math.floor(
            acc.reduce((prev, cur) => {
              return prev + cur;
            }, 0) / acc.length
          ),
          cpm: Math.floor(
            cpm.reduce((prev, cur) => {
              return prev + cur;
            }, 0) / cpm.length
          ),
        };
}
