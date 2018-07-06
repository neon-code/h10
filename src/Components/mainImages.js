import React from 'react';
import '../CSS/primary.css';
import { Button, Image, Icon, Label, Header, Modal } from 'semantic-ui-react';

var fileDir = {
    1:[
        { fileName: './images/n01616318_160.JPEG', id: "n01616318" },
        { fileName: './images/n01641577_57.JPEG', id: "n01641577" },
        { fileName: './images/n01697457_93.JPEG', id: "n01697457" },
        { fileName: './images/n01773797_64.JPEG', id: "n01773797" },
        { fileName: './images/n01855032_80.JPEG', id: "n01855032" },
        { fileName: './images/n01984695_840.JPEG', id: "n01984695" },
        { fileName: './images/n02086646_117.JPEG', id: "n02086646" },
        { fileName: './images/n02089973_186.JPEG', id: "n02089973" },
        { fileName: './images/n02092002_149.JPEG', id: "n02092002" },
        { fileName: './images/n02097474_120.JPEG', id: "n02097474" },
        { fileName: './images/n02106662_320.JPEG', id: "n02106662" },
        { fileName: './images/n02110063_321.JPEG', id: "n02110063" },
        { fileName: './images/n02112018_8.JPEG', id: "n02112018" },
        { fileName: './images/n02120505_358.JPEG', id: "n02120505" },
        { fileName: './images/n02123045_262.JPEG', id: "n02123045" },
        { fileName: './images/n02123394_125.JPEG', id: "n02123394" },
        { fileName: './images/n02123597_207.JPEG', id: "n02123597" },
        { fileName: './images/n02127052_408.JPEG', id: "n02127052" },
        { fileName: './images/n02128385_158.JPEG', id: "n02128385" },
        { fileName: './images/n02128925_227.JPEG', id: "n02128925" },
        { fileName: './images/n02134084_143.JPEG', id: "n02134084" },
        { fileName: './images/n02169497_273.JPEG', id: "n02169497" },
        { fileName: './images/n02233338_47.JPEG', id: "n02233338" },
        { fileName: './images/n02268443_1461.JPEG', id: "n02268443" },
        { fileName: './images/n02408429_80.JPEG', id: "n02408429" },
        { fileName: './images/n02454379_328.JPEG', id: "n02454379" },
        { fileName: './images/n02483708_47.JPEG', id: "n02483708" },
        { fileName: './images/n02486261_259.JPEG', id: "n02486261" },
        { fileName: './images/n02510455_84.JPEG', id: "n02510455" },
        { fileName: './images/n02786058_525.JPEG', id: "n02786058" },
        { fileName: './images/n02974003_218.JPEG', id: "n02974003" },
        { fileName: './images/n03047690_271.JPEG', id: "n03047690" },
        { fileName: './images/n03100240_266.JPEG', id: "n03100240" },
        { fileName: './images/n03160309_1300.JPEG', id: "n03160309" },
        { fileName: './images/n03388043_113.JPEG', id: "n03388043" },
        { fileName: './images/n03417042_173.JPEG', id: "n03417042" },
        { fileName: './images/n03444034_40.JPEG', id: "n03444034" },
        { fileName: './images/n03494278_140.JPEG', id: "n03494278" },
        { fileName: './images/n03692522_69.JPEG', id: "n03692522" },
        { fileName: './images/n03781244_260.JPEG', id: "n03781244" },
        { fileName: './images/n03796401_142.JPEG', id: "n03796401" },
        { fileName: './images/n03866082_189.JPEG', id: "n03866082" },
        { fileName: './images/n03891251_15.JPEG', id: "n03891251" },
        { fileName: './images/n03942813_110.JPEG', id: "n03942813" },
        { fileName: './images/n07742313_22.JPEG', id: "n07742313" },
        { fileName: './images/n09332890_317.JPEG', id: "n09332890" },
        { fileName: './images/n12620546_372.JPEG', id: "n12620546" },
        { fileName: './images/n12998815_244.JPEG', id: "n12998815" },
        { fileName: './images/n13044778_30.JPEG', id: "n13044778" },
        { fileName: './images/n13133613_948.JPEG', id: "n13133613" },
    ],

    2:[
        { fileName: './images/n01484850_76.JPEG', id: "0" },
        { fileName: './images/n01514668_366.JPEG', id: "1" },
        { fileName: './images/n01514859_70.JPEG', id: "1" },
        { fileName: './images/n01532829_114.JPEG', id: "1" },
        { fileName: './images/n01537544_32.JPEG', id: "1" },
        { fileName: './images/n01558993_155.JPEG', id: "1" },
        { fileName: './images/n01614925_47.JPEG', id: "1" },
        { fileName: './images/n01641577_48.JPEG', id: "8" },
        { fileName: './images/n01687978_71.JPEG', id: "8" },
        { fileName: './images/n01744401_139.JPEG', id: "8" },
        { fileName: './images/n01776313_134.JPEG', id: "5" },
        { fileName: './images/n01807496_26.JPEG', id: "1" },
        { fileName: './images/n01833805_89.JPEG', id: "1" },
        { fileName: './images/n01877812_115.JPEG', id: "7" },
        { fileName: './images/n01981276_573.JPEG', id: "0" },
        { fileName: './images/n02006656_93.JPEG', id: "1" },
        { fileName: './images/n02058221_193.JPEG', id: "1" },
        { fileName: './images/n02074367_167.JPEG', id: "0" },
        { fileName: './images/n02085620_213.JPEG', id: "3" },
        { fileName: './images/n02087046_178.JPEG', id: "3" },
        { fileName: './images/n02087394_52.JPEG', id: "3" },
        { fileName: './images/n02088238_252.JPEG', id: "3" },
        { fileName: './images/n02089078_111.JPEG', id: "3" },
        { fileName: './images/n02091244_26.JPEG', id: "3" },
        { fileName: './images/n02093859_61.JPEG', id: "3" },
        { fileName: './images/n02094114_99.JPEG', id: "3" },
        { fileName: './images/n02094433_63.JPEG', id: "3" },
        { fileName: './images/n02097209_66.JPEG', id: "3" },
        { fileName: './images/n02105641_284.JPEG', id: "3" },
        { fileName: './images/n02106550_109.JPEG', id: "3" },
        { fileName: './images/n02109047_232.JPEG', id: "3" },
        { fileName: './images/n02119789_122.JPEG', id: "2" },
        { fileName: './images/n02123045_147.JPEG', id: "7" },
        { fileName: './images/n02125311_301.JPEG', id: "2" },
        { fileName: './images/n02137549_237.JPEG', id: "7" },
        { fileName: './images/n02167151_147.JPEG', id: "5" },
        { fileName: './images/n02169497_247.JPEG', id: "5" },
        { fileName: './images/n02276258_8.JPEG', id: "5" },
        { fileName: './images/n02279972_144.JPEG', id: "5" },
        { fileName: './images/n02356798_112.JPEG', id: "7" },
        { fileName: './images/n02389026_184.JPEG', id: "4" },
        { fileName: './images/n02391049_37.JPEG', id: "4" },
        { fileName: './images/n02396427_104.JPEG', id: "4" },
        { fileName: './images/n02408429_91.JPEG', id: "4" },
        { fileName: './images/n02422699_106.JPEG', id: "4" },
        { fileName: './images/n02447366_61.JPEG', id: "7" },
        { fileName: './images/n02488291_31.JPEG', id: "6" },
        { fileName: './images/n02504013_20.JPEG', id: "7" },
        { fileName: './images/n02509815_46.JPEG', id: "2" },
        { fileName: './images/n02510455_44.JPEG', id: "2" },
    ],

    3:[
        { fileName: './images/n01871265_187.JPEG', id: "n01871265" },
        { fileName: './images/n01871265_89.JPEG', id: "n01871265" },
        { fileName: './images/n01872401_16.JPEG', id: "n01872401" },
        { fileName: './images/n01872401_314.JPEG', id: "n01872401" },
        { fileName: './images/n01873310_379.JPEG', id: "n01873310" },
        { fileName: './images/n01873310_70.JPEG', id: "n01873310" },
        { fileName: './images/n01877812_245.JPEG', id: "n01877812" },
        { fileName: './images/n01877812_69.JPEG', id: "n01877812" },
        { fileName: './images/n01883070_131.JPEG', id: "n01883070" },
        { fileName: './images/n01883070_80.JPEG', id: "n01883070" },
        { fileName: './images/n02123045_238.JPEG', id: "n02123045" },
        { fileName: './images/n02123045_262.JPEG', id: "n02123045" },
        { fileName: './images/n02123159_109.JPEG', id: "n02123159" },
        { fileName: './images/n02123159_22.JPEG', id: "n02123159" },
        { fileName: './images/n02123394_112.JPEG', id: "n02123394" },
        { fileName: './images/n02123394_89.JPEG', id: "n02123394" },
        { fileName: './images/n02123597_2.JPEG', id: "n02123597" },
        { fileName: './images/n02123597_56.JPEG', id: "n02123597" },
        { fileName: './images/n02124075_183.JPEG', id: "n02124075" },
        { fileName: './images/n02124075_20.JPEG', id: "n02124075" },
        { fileName: './images/n02137549_19.JPEG', id: "n02137549" },
        { fileName: './images/n02137549_237.JPEG', id: "n02137549" },
        { fileName: './images/n02138441_58.JPEG', id: "n02138441" },
        { fileName: './images/n02138441_66.JPEG', id: "n02138441" },
        { fileName: './images/n02325366_108.JPEG', id: "n02325366" },
        { fileName: './images/n02325366_116.JPEG', id: "n02325366" },
        { fileName: './images/n02326432_163.JPEG', id: "n02326432" },
        { fileName: './images/n02326432_416.JPEG', id: "n02326432" },
        { fileName: './images/n02328150_352.JPEG', id: "n02328150" },
        { fileName: './images/n02328150_79.JPEG', id: "n02328150" },
        { fileName: './images/n02342885_33.JPEG', id: "n02342885" },
        { fileName: './images/n02342885_75.JPEG', id: "n02342885" },
        { fileName: './images/n02346627_277.JPEG', id: "n02346627" },
        { fileName: './images/n02346627_75.JPEG', id: "n02346627" },
        { fileName: './images/n02356798_28.JPEG', id: "n02356798" },
        { fileName: './images/n02356798_86.JPEG', id: "n02356798" },
        { fileName: './images/n02361337_14.JPEG', id: "n02361337" },
        { fileName: './images/n02361337_2.JPEG', id: "n02361337" },
        { fileName: './images/n02363005_499.JPEG', id: "n02363005" },
        { fileName: './images/n02363005_503.JPEG', id: "n02363005" },
        { fileName: './images/n02364673_128.JPEG', id: "n02364673" },
        { fileName: './images/n02364673_59.JPEG', id: "n02364673" },
        { fileName: './images/n02443114_332.JPEG', id: "n02443114" },
        { fileName: './images/n02443484_27.JPEG', id: "n02443484" },
        { fileName: './images/n02444819_228.JPEG', id: "n02444819" },
        { fileName: './images/n02445715_70.JPEG', id: "n02445715" },
        { fileName: './images/n02447366_138.JPEG', id: "n02447366" },
        { fileName: './images/n02454379_114.JPEG', id: "n02454379" },
        { fileName: './images/n02457408_115.JPEG', id: "n02457408" },
        { fileName: './images/n02457408_414.JPEG', id: "n02457408" },
               
    ]
}

var activeIndex = Math.floor(Math.random() * 50), usedImages = [activeIndex], taskDone = 1, flag;
var timeTaken = { minutes: 0, seconds: 0, milsec: 0 }, indvTime = [0, 0, 0], addTime = [0, 0, 0], avgTime = [], Interval;
var level = 1, fileName = fileDir[level][activeIndex].fileName, levelFlag = [ true, true ];
const LevelLimit = [5, 10, 15];

export class MainImages extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isopen: false,
            activeNext: false,
            buttonText: "Next Image"
        };
    }

    componentDidMount() {
        //The componentDidMount() is a React method which is triggered when the app starts.
        alert("* Please disable AdBlock and any other antivirus software before you begin!\n Make sure to \"Allow\" popups/cookies on this app! *");

        this.props.onRef(this);
        this.props.setCards(level);
    }

    updateButton() {
        //A simple condition statement to enable/disable the NEXT button
        this.state.activeNext ? this.setState({ activeNext: false }) : this.setState({ activeNext: true })
    }

    OnFinish(x) {
        if ( x === 1 ) {
            //To find the Average total time
            let td = taskDone - 1;
            avgTime[0] = addTime[0] / td;
            avgTime[1] = addTime[1] / td;
            avgTime[2] = addTime[2] / td;

            avgTime[1] += (avgTime[0] * 60) % 60;
            avgTime[2] += (avgTime[1] * 100) % 100;

            avgTime[0] = Math.floor(avgTime[0]);
            avgTime[1] = Math.floor(avgTime[1]);
            avgTime[2] = Math.floor(avgTime[2]);

            //this onFinish is in App.js as an html prop in <MainImages>
            this.props.onFinish(addTime, avgTime);
        }
        else {
            //To find the Average indv time
            let td = LevelLimit[0] ;
            avgTime[0] = indvTime[0] / td;
            avgTime[1] = indvTime[1] / td;
            avgTime[2] = indvTime[2] / td;

            avgTime[1] += (avgTime[0] * 60) % 60;
            avgTime[2] += (avgTime[1] * 100) % 100;

            avgTime[0] = Math.floor(avgTime[0]);
            avgTime[1] = Math.floor(avgTime[1]);
            avgTime[2] = Math.floor(avgTime[2]);

            this.props.apndtime(indvTime, avgTime);
        }
    }

    startTimer() {
        timeTaken.milsec++;

        if (timeTaken.milsec > 99) {
            timeTaken.seconds++;
            timeTaken.milsec = 0;
        }

        if (timeTaken.seconds > 59) {
            timeTaken.minutes++;
            timeTaken.seconds = 0;
        }
    }

    startWatch() {
        Interval = setInterval(this.startTimer, 10);
    }

    changeImage() {
        //Pause the StopWatch
        clearInterval(Interval);
        this.updateButton();

        //To pass values to Parent (App.js);
        let t = timeTaken.minutes + ":" + timeTaken.seconds + ":" + timeTaken.milsec;

        if( level === 2 || level === 3 ) 
            this.props.onNextImage(fileDir[level][activeIndex].fileName, fileDir[level][activeIndex].id, t);
        else 
            this.props.onNextImage(fileDir[level][activeIndex].fileName, parseInt(fileDir[level][activeIndex].id.slice(1), 10), t);
        
        //Add the time to find total time take
        addTime[2] += timeTaken.milsec;
        if (addTime[2] > 99) {
            addTime[1] += Math.floor(addTime[2] / 100);
            addTime[2] %= 100;
        }
        addTime[1] += timeTaken.seconds;
        if (addTime[1] > 59) {
            addTime[0] += Math.floor(addTime[1] / 60);
            addTime[1] %= 60;
        }
        addTime[0] += timeTaken.minutes;

        //For individual Level time
        indvTime[2] += timeTaken.milsec;
        if (indvTime[2] > 99) {
            indvTime[1] += Math.floor(indvTime[2] / 100);
            indvTime[2] %= 100;
        }
        indvTime[1] += timeTaken.seconds;
        if (indvTime[1] > 59) {
            indvTime[0] += Math.floor(indvTime[1] / 60);
            indvTime[1] %= 60;
        }
        indvTime[0] += timeTaken.minutes;
        
        //Clear the StopWatch
        timeTaken.milsec = timeTaken.seconds = timeTaken.minutes = 0;

        //Load next image
        taskDone++;
        //Change of Level happens here
        if (taskDone > LevelLimit[0] && taskDone < LevelLimit[1] && levelFlag[0] === true) {

            //to indicate a Level has finished labeling
            this.OnFinish(0);

            //sets the heirarchy level
            level = 2;

            //To flush out the indices and store new values
            usedImages = usedImages.slice(0, 0);

            //Reset indv Timer
            indvTime[0] = indvTime[1] = indvTime[2] = 0;

            //to prevent re-entering this if statement
            levelFlag[0] = false;
        }
        else
        if (taskDone > LevelLimit[1] && taskDone < LevelLimit[2] && levelFlag[1] === true) {
            this.OnFinish(0);
            level =3;
            usedImages = usedImages.slice(0, 0);
            indvTime[0] = indvTime[1] = indvTime[2] = 0;
            levelFlag[1] = false;
        }
        else
        if( taskDone === LevelLimit[2] )
            this.setState({ buttonText: "Finish!" })
        
        if (taskDone > LevelLimit[2] ) {
            this.OnFinish(0);
            indvTime[0] = indvTime[1] = indvTime[2] = 0;

            //indicated that the task has finished
            this.setState({
                isopen: true
            })
        }
        else {
            //Here we check if a randomly selected image has been selected before or not
            do {
                flag = true;
                activeIndex = Math.floor(Math.random() * 50);

                //We store the array index of FileDir in an array and use it compare
                for (var i = 0; i < usedImages.length; i++)
                    if (usedImages[i] === activeIndex)
                        flag = false;

                //only if a new, unique value is selected, it will display
                if (flag === true) {
                    usedImages.push(activeIndex);
                    fileName= fileDir[level][activeIndex].fileName;
                }
            } while (flag !== true);
        }

        this.props.setCards(level);

        //Start the Watch
        this.startWatch();
    }

    render() {
        return (
            <div>
                <Image className="imageStyling" src={fileName} />

                <Label style={{ zIndex: "1", position: "fixed", top: "10px", right: '4vw' }} color="teal">
                    {taskDone}/150
                </Label>

                <div className="NextButton" style={{ width: '180px' }} >
                    {this.state.activeNext ?
                        <Button primary animated size='huge' onClick={this.changeImage.bind(this)}>
                            <Button.Content visible> {this.state.buttonText} </Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow' />
                            </Button.Content>
                        </Button>
                        :
                        <Button disabled size='huge'>{this.state.buttonText}</Button>
                    }
                </div>

                <Modal open={this.state.isopen} basic dimmer="blurring" style={{ position: "fixed", width: "auto", marginTop: "30vh", marginLeft: "38vw" }}>
                    <Header icon='check square outline' style={{ textAlign: "center" }} content='Task Completed!' />
                    <Modal.Content>
                        <h2> Thank you for your participation! <br />
                            Please download the result. </h2>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='blue' inverted onClick={this.OnFinish.bind(this, 1)}>
                            <Icon name='download icon' /> Download Result
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}