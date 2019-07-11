import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';
import { PreloaderService } from 'src/app/services/preloader.service';
import { CaseletService } from 'src/app/services/caselet.service';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';

const Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-edit-caselet',
  templateUrl: './edit-caselet.component.html'
})
export class EditCaseletComponent implements OnInit {

  admin = false;
  rejectComment;
  rejected = false;
  imageUploaded = false;
  caseletId;
  storyAdded;
  coverImage = '';
  technology: '+tag';
  technologies = [];
  accounts = [];
  contracts = [];
  industries = [];
  offerings = [];
  practice = [];
  services = [];
  verticals = [];
  tags = [];
  someTechnologies = ['JAVA', '.NET', 'ANGULAR'];
  tools = [];
  storyForm: FormGroup;
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
    imageResize: {}
  };


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private filterService: FilterService,
    private userService: PreloaderService,
    private caseletSerivce: CaseletService) {
    this.modules = this.config;
  }

  ngOnInit() {
    this.buildCaseletForm();
    this.getFields();
    this.activatedRoute.params.subscribe((params) => {
      this.caseletId = params['caseletId'];
    });
    if (this.caseletId) {
      this.admin = true;
      this.getPendingCaselet(this.caseletId);
    }
  }

  onPracticeSelect(event) {
    console.log(event);
  }

  getPendingCaselet(caseletId) {
    this.caseletSerivce.getPendingCaselet(caseletId).subscribe((response: any) => {
      this.storyAdded = response.data.project;
      console.log(response.data.project.user.mid);
      console.log(response.data.project.user.name);
      this.mid = response.data.project.user.mid;
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
        const img = '<div> <img src=' + imageUrlFromServer + ' /> </div>';
        this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
        document.getElementById('fileInputField').setAttribute(null, null);
      });
    };
    fileInput.click();
  }

  getFields() {
    this.filterService.getfilters().subscribe((response: any) => {
      this.accounts = response.data.filters.accounts;
      this.contracts = response.data.filters.contracts;
      this.industries = response.data.filters.subVerticals;
      this.offerings = response.data.filters.offerings;
      this.practice = response.data.filters.practice;
      this.services = response.data.filters.subPractices;
      this.tags = response.data.filters.tag;
      this.technologies = response.data.filters.technologies;
      this.tools = response.data.filters.tools;
      this.verticals = response.data.filters.verticals;
      console.log(response);
    });
  }

  patchingValueToForm(formData) {
    const technologies = [];
    const tools = [];
    const tags = [];
    console.log(formData);

    // tslint:disable-next-line:triple-equals
    if (formData.technologies != '') {
      formData.technologies.split(',').map(technology => {
        technologies.push({
          display: technology,
          value: technology
        });
      });
    }

    // tslint:disable-next-line:triple-equals
    if (formData.tools != '') {
      formData.tools.split(',').map(tool => {
        tools.push({
          display: tool,
          value: tool
        });
      });
    }

    // tslint:disable-next-line:triple-equals
    if (formData.tags != '') {
      formData.tags.split(',').map(tag => {
        tags.push(tag);
      });
    }


    this.storyForm.patchValue({
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
    let mid = '';
    let name = '';

    console.log(this.admin);
    if (this.admin) {
      mid = this.mid;
      name = this.author;
    }

    const tags = this.storyForm.get('tags').value ? this.storyForm.get('tags').value : [];
    const newTagsSet = new Set();
    tags.map(tag => {
      newTagsSet.add(tag.toLowerCase());
    });
    const newTags = Array.from(newTagsSet);

    const technologies = this.storyForm.get('technologies').value ? this.storyForm.get('technologies').value : [];

    const newTechnologiesSet = new Set();
    technologies.map(technology => {
      newTechnologiesSet.add(technology.display.toLowerCase());
    });
    const newTechnologies = Array.from(newTechnologiesSet);

    console.log(newTechnologies);
    const tools = this.storyForm.get('tools').value ? this.storyForm.get('tools').value : [];
    const newToolsSet = new Set();
    tools.map(tool => {
      newToolsSet.add(tool.display.toLowerCase());
    });
    const newTools = Array.from(newToolsSet);

    const experts = [];

    const story = {
      account: this.storyForm.get('account').value,
      title: this.storyForm.get('title').value,
      coverImage: this.coverImage,
      vertical: this.storyForm.get('vertical').value,
      domain: this.storyForm.get('domain').value,
      expertsOfTopic: experts,
      engineering: this.storyForm.get('engineering').value,
      tags: newTags,
      technologies: newTechnologies,
      tools: newTools,
      offering: this.storyForm.get('offering').value,
      subVertical: this.storyForm.get('industry').value,
      subPractice: this.storyForm.get('service').value,
      practice: this.storyForm.get('practice').value,
      contract: this.storyForm.get('contract').value,
      user: {
        mid: mid,
        name: name
      },
      customer: {
        name: this.storyForm.get('customerName').value,
        details: this.storyForm.get('customerDetails').value
      },
      projectDetails: this.storyForm.get('projectDetails').value,
      benefits: this.storyForm.get('customerAndMindtreeBenefits').value,
      challenges: this.storyForm.get('needChallenges').value,
      solution: this.storyForm.get('solutionProvided').value,
      executionSummary: this.storyForm.get('executiveSummaryOfTheCaselet').value
    };
    console.log(story);
    return story;
  }

  reviewCaseletFunction() {
    this.reviewCaselet = this.convertCaseletFormToJSON();
  }

  buildCaseletForm() {
    this.storyForm = this.formBuilder.group({
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
    console.log(this.customerDetails);
    const story = this.convertCaseletFormToJSON();
    const confirmation = confirm('Do you want to save caselet ? ');
    if (confirmation) {
      this.caseletSerivce.saveCaselet(story).subscribe((response) => {
        alert('Caselet Saved!');
      });
    } else {
      console.log(false);
    }
  }

  onCaseletFormSubmit() {
    const story = this.convertCaseletFormToJSON();
    story['submit'] = true;
    console.log('This confirmation');
    const confirmation = confirm('Do you want to submit caselet ? ');
    if (confirmation) {
      this.caseletSerivce.saveCaselet(story).subscribe((response) => {
        alert('Caselet submitted!');
        this.router.navigate(['/']);
      });
    } else {
      console.log(false);
    }
  }

  onApproveCaselet() {
    const story = this.convertCaseletFormToJSON();
    const confirmation = confirm('Do you want to approve caselet ? ');
    if (confirmation) {
      this.caseletSerivce.approveCaselet(story).subscribe((response) => {
        alert('Caselet Approved!');
        this.router.navigate(['/']);
      });
    } else {
      console.log(false);
    }
  }

  incrementStep() {
    this.stepCount++;
  }

  decrementStep() {
    this.stepCount--;
  }

  onRejectCaselet() {
    const message = {
      message: this.rejectComment
    };
    const id = this.storyAdded.id;
    this.caseletSerivce.rejectCaselet(message, id).subscribe((response) => {
      alert('Caselet rejected!');
      this.router.navigate(['user/admin/pendingCaselets']);
    });
  }

  fileChange(event): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      this.caseletSerivce.saveImage(file).subscribe((response: any) => {
        this.coverImage = response.data.imageUrl;
        console.log(this.coverImage);
      }, error => {
        console.log(error);
      });
    }
  }
}
