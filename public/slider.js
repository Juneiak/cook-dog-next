export default class Slider {
  constructor(ref) {
    this.slider = ref
    this.list = this.slider.querySelector('.slider__list');
    this.initialListElements = Array.from(this.list.querySelectorAll('.slider__list-element'));

    this.elemntsWidth = this.initialListElements[0].offsetWidth;
    this.listWidth = this.list.clientWidth;
    this.listCenter = this.listWidth / 2;
    this.ratio = this.elemntsWidth / this.listWidth;
    this.cloneAmount = this.ratio <= 0.15 ? 6
      : this.ratio <= 0.2 ? 5
      : this.ratio <= 0.3 ? 4
      : 3
    this.insert(this.cloneAmount, this.list, this.initialListElements)
    
    this.list.scrollLeft = this.initialListElements[0].offsetLeft - this.listCenter + (this.elemntsWidth / 2);
    this.centerElement = this.initialListElements[0];

    // this part for scrolling
    this.listElements = Array.from(this.list.querySelectorAll('.slider__list-element'));
    this.elementsPositions = this.listElements.map(el => el.offsetLeft);
    this.leftOffset =  this.elementsPositions[0]
    this.leftOffsetTo = this.elementsPositions[this.listElements.length - this.cloneAmount];
    this.rightOffset = this.elementsPositions[this.listElements.length - 1] - this.listWidth + this.elemntsWidth;
    this.rightOffsetTo = this.elementsPositions[this.cloneAmount - 1] - this.listWidth + this.elemntsWidth;
  }

  insert(cloneAmount, list, elementsList) {
    if (elementsList.length > cloneAmount) {
      for (let i = 1; i <= cloneAmount; i++) {
        list.insertBefore(
          elementsList[elementsList.length - i].cloneNode(true),
          list.firstChild
        );
      }
    } else {
        let i = 0
        while (i < cloneAmount) {
          list.insertBefore(
            elementsList[elementsList.length - (i % elementsList.length) - 1].cloneNode(true),
            list.firstChild
          );
          i++
        }
      }
  }
  selectCenteredElement() {
    let listOffset = this.list.scrollLeft;
    const center = this.listCenter + listOffset
    if (listOffset > (this.rightOffset - 1)) this.list.scrollLeft = this.rightOffsetTo;
    if (listOffset < (this.leftOffset + 1)) this.list.scrollLeft = this.leftOffsetTo;
    this.elementsPositions.find((el, index) => {
      if (center > el && center < (el + this.elemntsWidth)) this.setCenterElement(this.listElements[index])
    })
  }

  setCenterElement(el) {
    if (el.isEqualNode(this.centerElement)) return
    if (this.centerElement) this.deactivate(this.centerElement);
    this.activate(el);
    this.centerElement = el;
  }

  addListeners() {
    this.list.addEventListener('scroll', () => this.selectCenteredElement.call(this));
  }

  activate(el) {
    if (!el.classList.contains('slider__element-is-active')) el.classList.add('slider__element-is-active');
  }
  
  deactivate(el) {
    if (el.classList.contains('slider__element-is-active')) el.classList.remove('slider__element-is-active');
  }

  initialize() {
    this.addListeners();
    this.activate(this.centerElement)
  }
}