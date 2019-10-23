const {ccclass, property} = cc._decorator;

@ccclass
export default class Test extends cc.Component {
    
    @property(cc.Sprite)
    sprite_1: cc.Sprite = null;
    
    @property(cc.Sprite)
    sprite_2: cc.Sprite = null;

    //@ts-ignore
    @property(cc.EffectAsset) 
    //@ts-ignore
    effect_asset: cc.EffectAsset = null;

    start () {
        //创建一个Material并设置effectAsset为this.effect_asset
        let material_1 = new cc.Material();
         //@ts-ignore
        material_1.effectAsset = this.effect_asset;
        material_1.name = this.effect_asset.name + this.sprite_1.node.name;
        this.sprite_1.setMaterial(0, material_1);
        //设置第一个Material的的u_color属性为红色
        //@ts-ignore
        material_1.setProperty('u_color',[1.0,0.0,0.0,1.0]);

        //创建第二个Material并设置effectAsset为this.effect_asset
        let material_2 = new cc.Material();
        //@ts-ignore
        material_2.effectAsset = this.effect_asset; //调用EffectAsset.getInstantiatedEffect()复制一个新Effect也有问题
        material_2.name = this.effect_asset.name + this.sprite_2.node.name;
        this.sprite_2.setMaterial(0, material_2);
        //设置第二个Material的的u_color属性为绿色
        //@ts-ignore
        material_2.setProperty('u_color',[0.0,1.0,0.0,1.0]);

        /**
         *运行后结果为 两张图片都变成了红色
         */
    }
}
