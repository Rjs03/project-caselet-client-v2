import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';
import { PreloaderService } from 'src/app/services/preloader.service';
import { CaseletService } from 'src/app/services/caselet.service';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';
import { DataServiceService } from 'src/app/services/data-service.service';

const Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-add-caselet',
  templateUrl: './add-caselet.component.html'
})
export class AddCaseletComponent implements OnInit {

  rejectComment;
  rejected = false;
  imageUploaded = false;
  storyAdded;
  coverImage = '';
  technologies = [];
  accounts = [];
  contracts = [];
  industries = [];
  offerings = [];
  practice = [];
  services = [];
  verticals = [];
  tags = [];
  experts = [];
  expNam = [];
  subPractices = [];
  expertsName = new Set();
  tools = [];
  caseletForm: FormGroup;
  stepCount = 1;
  modules = {};
  savedCaselet: {};
  customerDetails;
  customerName;
  mid;
  author;
  quillEditorRef;
  reviewCaselet: any;
  editorStyle = {
    height: '20rem'
  };

  config = {
    toolbar: {
      container: ['bold', 'italic', 'underline', 'strike',
        'blockquote', 'code-block',
        { 'list': 'ordered' }, { 'list': 'bullet' },
        { 'script': 'sub' }, { 'script': 'super' },
        { 'indent': '-1' }, { 'indent': '+1' },
        { 'direction': 'rtl' },
        { 'size': ['small', false, 'large', 'huge'] },
        { 'header': [1, 2, 3, 4, 5, 6, false] },
        { 'color': [] }, { 'background': [] },
        { 'font': [] },
        { 'align': [] },
        'image']
    },
    imageResize: {},
    history: {
      userOnly: true
    }
  };


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private filterService: FilterService,
    private userService: PreloaderService,
    private caseletSerivce: CaseletService,
    private dataService: DataServiceService) {
    this.modules = this.config;
  }

  ngOnInit() {
    this.buildCaseletForm();
    this.getFields();
    this.getCaseletByAuthor();
  }

  getData(value) {
    this.dataService.getUserData(value).subscribe((response: any) => {
      this.experts = response.value;
      this.expertsName.clear();
      this.experts.map((expert) => {
        const name = expert.displayName + ' (' + (expert.userPrincipalName).substring(0, 8) + ')';
        this.expertsName.add(name);
      });
      this.expNam = Array.from(this.expertsName);
    });
  }

  onPracticeSelect(data) {
    this.subPractices = [];
    this.services.map(service => {
      // tslint:disable-next-line:triple-equals
      if (service.practice.name == data) {
        this.subPractices.push(service);
      }
    });
  }

  expertsFunctionCall(value) {
    if (value) {
      this.getData(value);
    }
  }

  getPendingCaselet(caseletId) {
    this.caseletSerivce.getPendingCaselet(caseletId).subscribe((response: any) => {
      this.storyAdded = response.data.project;
      this.mid = response.data.project.userMid;
      this.author = response.data.project.user.name;
      this.patchingValueToForm(this.storyAdded);
    });
  }

  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;
    const toolbar = editorInstance.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler);
  }

  imageHandler = (image, callback) => {
    const fileInput = <HTMLInputElement>document.getElementById('fileInputField');
    document.getElementById('fileInputField').onchange = () => {
      let file: File;
      file = fileInput.files[0];
      this.caseletSerivce.saveImage(file).subscribe((response: any) => {
        const imageUrlFromServer = response.data.imageUrl;
        const range = this.quillEditorRef.getSelection(true);
        const img = '<img src=' + imageUrlFromServer + ' />';
        this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
        document.getElementById('fileInputField').setAttribute(null, null);
      });
    };
    fileInput.click();
  }

  getCaseletByAuthor() {
    const user = this.userService.getUserDetails();
    const mid = user.mid;
    this.caseletSerivce.getCaseletByAuthor(mid).subscribe((response: any) => {
      if (response.data.project !== null) {
        if ((response.data.project.submit === undefined) || (response.data.project.submit === false)) {
          this.savedCaselet = response.data.project;
          this.rejectComment = response.data.project.adminComment;
          if (this.rejectComment != null) {
            this.rejected = true;
          }
          if (this.savedCaselet) {
            this.patchingValueToForm(this.savedCaselet);
          }
        } else if (response.data.project.submit === true) {
          alert('You have already submitted one caselet. Please wait till the admin approves it.');
          this.router.navigate(['/']);
        }
      }
    });
  }

  getFields() {
    this.filterService.getMetaData().subscribe((response: any) => {
      console.log('Meta data', response);
      this.accounts = response.data.metadata.accounts.map((account) => {
        return account.name;
      });
      this.contracts = response.data.metadata.contracts;
      this.industries = response.data.metadata.subVerticals;
      this.offerings = response.data.metadata.offerings;
      this.practice = response.data.metadata.practice;
      this.services = response.data.metadata.subPractices;
      this.tags = response.data.metadata.tag;
      this.technologies = response.data.metadata.technologies.map((technology) => {
        return technology.name;
      });
      this.tools = response.data.metadata.tools.map((tool) => {
        return tool.name;
      });
      this.verticals = response.data.metadata.verticals;
    });
  }

  patchingValueToForm(formData) {
    const technologies = [];
    const tools = [];
    const tags = [];

    // tslint:disable-next-line:triple-equals
    if (formData.technologies != '') {
      formData.technologies.split(',').map(technology => {
        technologies.push(technology);
      });
    }

    // tslint:disable-next-line:triple-equals
    if (formData.tools != '') {
      formData.tools.split(',').map(tool => {
        tools.push(tool);
      });
    }

    // tslint:disable-next-line:triple-equals
    if (formData.tags != '') {
      formData.tags.split(',').map(tag => {
        tags.push(tag);
      });
    }

    this.onPracticeSelect(formData.practice);

    this.caseletForm.patchValue({
      title: formData.title,
      description: formData.storyDescription,
      experts: formData.experts,
      technologies: technologies,
      tools: tools,
      tags: tags,
      account: formData.account,
      vertical: formData.vertical,
      domain: formData.domain,
      offering: formData.offering,
      engineering: formData.engineering,
      practice: formData.practice,
      contract: formData.contract,
      industry: formData.subVertical,
      service: formData.subPractice,
      customerName: formData.customerName,
      customerDetails: formData.customerDetails,
      projectDetails: formData.projectDetails,
      needChallenges: formData.challenges,
      solutionProvided: formData.solution,
      customerAndMindtreeBenefits: formData.benefits,
      executiveSummaryOfTheCaselet: formData.executionSummary
    });
  }

  convertCaseletFormToJSON() {
    const mid = '';
    const name = '';
    const tags = this.caseletForm.get('tags').value ? this.caseletForm.get('tags').value : [];
    const newTagsSet = new Set();
    tags.map(tag => {
      newTagsSet.add(tag.toLowerCase());
    });
    const newTags = Array.from(newTagsSet);

    const technologies = this.caseletForm.get('technologies').value ? this.caseletForm.get('technologies').value : [];
    const newTechnologiesSet = new Set();
    technologies.map(technology => {
      newTechnologiesSet.add(technology.toLowerCase());
    });
    const newTechnologies = Array.from(newTechnologiesSet);

    const tools = this.caseletForm.get('tools').value ? this.caseletForm.get('tools').value : [];
    const newToolsSet = new Set();
    tools.map(tool => {
      newToolsSet.add(tool.toLowerCase());
    });
    const newTools = Array.from(newToolsSet);

    const experts = [];

    const story = {
      account: this.caseletForm.get('account').value,
      title: this.caseletForm.get('title').value,
      coverImage: this.coverImage,
      vertical: this.caseletForm.get('vertical').value,
      domain: this.caseletForm.get('domain').value,
      expertsOfTopic: experts,
      engineering: this.caseletForm.get('engineering').value,
      tags: newTags,
      technologies: newTechnologies,
      tools: newTools,
      offering: this.caseletForm.get('offering').value,
      subVertical: this.caseletForm.get('industry').value,
      subPractice: this.caseletForm.get('service').value,
      practice: this.caseletForm.get('practice').value,
      contract: this.caseletForm.get('contract').value,
      user: {
        mid: mid,
        name: name
      },
      customer: {
        name: this.caseletForm.get('customerName').value,
        details: this.caseletForm.get('customerDetails').value
      },
      projectDetails: this.caseletForm.get('projectDetails').value,
      benefits: this.caseletForm.get('customerAndMindtreeBenefits').value,
      challenges: this.caseletForm.get('needChallenges').value,
      solution: this.caseletForm.get('solutionProvided').value,
      executionSummary: this.caseletForm.get('executiveSummaryOfTheCaselet').value
    };
    return story;
  }

  reviewCaseletFunction() {
    this.reviewCaselet = this.convertCaseletFormToJSON();
  }

  buildCaseletForm() {
    this.caseletForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      experts: [''],
      technologies: [''],
      tools: [''],
      tags: [''],
      account: [''],
      vertical: [''],
      domain: [''],
      offering: [''],
      engineering: [''],
      practice: [''],
      contract: [''],
      industry: [''],
      service: [''],
      customerName: [''],
      customerDetails: [''],
      projectDetails: [''],
      needChallenges: [''],
      solutionProvided: [''],
      customerAndMindtreeBenefits: [''],
      executiveSummaryOfTheCaselet: ['']
    });
  }

  onSaveCaselet() {
    const story = this.convertCaseletFormToJSON();
    const confirmation = confirm('Do you want to save caselet ? ');
    if (confirmation) {
      this.caseletSerivce.saveCaselet(story).subscribe((response) => {
        alert('Caselet Saved!');
      });
    }
  }

  onCaseletFormSubmit() {
    const story = this.convertCaseletFormToJSON();
    story['submit'] = true;
    const confirmation = confirm('Do you want to submit caselet ? ');
    if (confirmation) {
      this.caseletSerivce.saveCaselet(story).subscribe((response) => {
        alert('Caselet submitted!');
        this.router.navigate(['/']);
      });
    }
  }

  incrementStep() {
    this.stepCount++;
  }

  decrementStep() {
    this.stepCount--;
  }
}
