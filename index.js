/**
 * @file mofron-comp-modalfil/index.js
 * @brief modal filter component for mofron
 *        apply a dim filter to the entire screen as when displaying a modal window
 * @feature modal windows can be easily implemented by adding child components to this component
 *          it is possible to make the back look like frosted glass (blur)
 * @attention default visible is false
 *            this component must be positioned to root for enabling the "blur" function
 *            other components that are the same hierarchy from this component are added [mofron-effect-blur](https://github.com/mofron/mofron-effect-blur.git).
 * @license MIT
 */
const Blur = require("mofron-effect-blur");
const SyncWin = require("mofron-effect-syncwin");
const comutl = mofron.util.common;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     *
     * @param (mixed) blur prameter
     *                key-value: component config
     * @short blur
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("ModalFil");
            this.shortForm("blur");
            /* init config */
            this.confmng().add("blur", { type: "size", init: "0rem" });
	    this.confmng().add("speed", { type: "number", init: 0 });
	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    let pvt = { private:true };
            this.effect(new SyncWin(), pvt);
            this.style({
                'position' : 'fixed',
                'z-index'  : '9999',
                'top'      : '0rem',
                'left'     : '0rem',
            }, pvt);
            /* set default color */
            this.baseColor([240,240,240,0.5], pvt);

            this.visible(false);

	    this.styleDom().style().listener('display',this.switchBlur,this);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set blur effect
     * 
     * @type private
     */
    beforeRender () {
        try {
            super.beforeRender();
            if ((null === this.parent()) || ("0rem" === this.blur())) {
                return;
            }
            let pchd = this.parent().child();
            for (let pc in pchd) {
                if (this.id() !== pchd[pc].id()) {
                    pchd[pc].effect([
                        new Blur({
			    value: this.blur(), tag: "ModalFil", speed: this.speed(), eid: -1
			}),
                        new Blur({
			    value: "0rem", tag: "ModalFil", speed: this.speed(), eid: -1
			})
                    ]);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set backgrond color
     *
     * @param (mixed (color)) string: background color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (key-value) style option
     * @return (string) backgrond color
     * @type parameter
     */
    mainColor (prm, opt) {
        try {
	    return this.baseColor(prm, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set backgrond color
     *
     * @param (mixed (color)) string: background color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (key-value) style option
     * @return (string) backgrond color
     * @type parameter
     */
    baseColor (prm, opt) {
        try {
	    let p_prm = undefined;
	    if (undefined !== prm) {
                p_prm = comutl.getcolor(prm);
		let rgba = p_prm.rgba();
                if ( (1 === rgba[3]) &&
		     ((false === Array.isArray(prm)) || (undefined === prm[3])) ) {
                    p_prm.rgba(rgba[0], rgba[1], rgba[2], 0.5);
		}

	    }
            return super.baseColor(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * blur value
     *
     * @param (string (size)) blur value
     * @param (number) blur speed (ms)
     * @return (string) blur value
     * @type parameter
     */
    blur (val, spd) {
        try {
	    if (undefined !== spd) {
                this.speed(spd);
	    }
	    return this.confmng("blur", val);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * blur speed
     * 
     * @param (number) blur speed (ms)
     * @return (number) blur speed (ms)
     * @type parameter
     */
    speed (prm) {
        try {
            return this.confmng("speed", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * switch blur effect
     * 
     * @param (mixed) after style value (string/null)
     * @param (mixed) before style value (string/null)
     * @type private
     */
    switchBlur (af,bf,cmp) {
        try {
	    if (null === cmp.parent()) {
                return;
	    }
            let pchd = cmp.parent().child();
            for (let pc in pchd) {
                if (cmp.id() !== pchd[pc].id()) {
		    let opt = {
		        name: "Blur", tag: "ModalFil",
			value: ("none" === af) ? "0rem" : cmp.blur()
		    };
                    let eff = pchd[pc].effect(opt);
		    if (true === comutl.isinc(eff, "Blur")) {
                        eff.execute();
		    }
                }
            }
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
